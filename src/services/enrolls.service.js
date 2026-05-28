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
        include: {
            route: true
        }
    })
    
    return enrolls.map(enroll => enroll.route)
}

module.exports = {
    getEnrolls,
    createEnroll,
    getEnrollsByUserId
}