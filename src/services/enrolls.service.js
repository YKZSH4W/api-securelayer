const prisma = require('../config/prisma')

const getEnrolls = async () => {
    return await prisma.enrolls.findMany()
}

const createEnroll = async (data) => {
    const existing = await prisma.enrolls.findUnique({
        where: { userId_routeId: { userId: data.userId, routeId: data.routeId } }
    })

    if (existing) {
        const error = new Error('El usuario ya está inscrito en esta ruta')
        error.status = 409
        throw error
    }

    return await prisma.enrolls.create({
        data: {
            ...data,
            enrollmentDate: new Date(),
            isCompleted: false
        }
    })
}

const getEnrollsByUserId = async (userId) => {
    const enrolls = await prisma.enrolls.findMany({
        where: {
            userId: parseInt(userId)
        },
        orderBy: {
            routeId: 'asc'
        },
        include: {
            route: true
        }
    })

    return enrolls.map(enroll => ({
        ...enroll.route,
        isCompleted: enroll.isCompleted
    }))
}

// Siguiente nivel de conocimiento (Experto es el máximo)
const nextKnowledgeLevel = (current) => {
    switch (current) {
        case 'Sin clasificar': return 'Principiante'
        case 'Principiante': return 'Avanzado'
        case 'Avanzado': return 'Experto'
        default: return 'Experto'
    }
}

const completeRouteAndAdvance = async (userId, routeId) => {
    const uid = parseInt(userId)
    const rid = parseInt(routeId)

    const currentEnroll = await prisma.enrolls.findUnique({
        where: { userId_routeId: { userId: uid, routeId: rid } }
    })

    // Solo al completar la ruta por primera vez se marca y se sube de nivel
    let newKnowledgeLevel = null
    if (currentEnroll && !currentEnroll.isCompleted) {
        await prisma.enrolls.update({
            where: { id: currentEnroll.id },
            data: { isCompleted: true, finishDate: new Date() }
        })

        // Sube al usuario al siguiente nivel de conocimiento
        const user = await prisma.users.findUnique({ where: { id: uid } })
        newKnowledgeLevel = nextKnowledgeLevel(user?.knowledgeLevel)
        await prisma.users.update({
            where: { id: uid },
            data: { knowledgeLevel: newKnowledgeLevel }
        })
    }

    const nextRoute = await prisma.routes.findFirst({
        where: { id: { gt: rid } },
        orderBy: { id: 'asc' }
    })

    let enrolledNext = false
    if (nextRoute) {
        const existingNext = await prisma.enrolls.findUnique({
            where: { userId_routeId: { userId: uid, routeId: nextRoute.id } }
        })

        if (!existingNext) {
            await prisma.enrolls.create({
                data: {
                    userId: uid,
                    routeId: nextRoute.id,
                    enrollmentDate: new Date(),
                    isCompleted: false
                }
            })
            enrolledNext = true
        }
    }

    return {
        completedRouteId: rid,
        nextRoute: nextRoute || null,
        enrolledNext,
        newKnowledgeLevel
    }
}

module.exports = {
    getEnrolls,
    createEnroll,
    getEnrollsByUserId,
    completeRouteAndAdvance
}