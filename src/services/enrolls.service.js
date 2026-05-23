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
    return await prisma.enrolls.create({ data })
}

module.exports = {
    getEnrolls,
    createEnroll
}