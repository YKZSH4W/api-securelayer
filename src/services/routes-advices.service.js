const prisma = require('../config/prisma')

const getRoutesAdvices = async () => {
    return await prisma.routesAdvices.findMany()
}

const createRouteAdvice = async (data) => {
    return await prisma.routesAdvices.create({
        data: {
            ...data
        }
    })
}

const getRouteAdvicesByRouteId = async (routeId) => {
    return await prisma.routesAdvices.findMany({
        where: {
            routeId: parseInt(routeId)
        }
    })
}

module.exports = {
    getRoutesAdvices,
    createRouteAdvice,
    getRouteAdvicesByRouteId
}