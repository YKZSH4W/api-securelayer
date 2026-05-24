const prisma = require('../config/prisma')

const getLessons = async () => {
    return await prisma.lessons.findMany()
}

const createLesson = async (data) => {
    return await prisma.lessons.create({
        data: {
            ...data,
            isCompleted: false
        }
    })
}

const getLessonsByRouteId = async (routeId) => {
    return await prisma.lessons.findMany({
        where: {
            routeId: parseInt(routeId)
        }
    })
}

module.exports = {
    getLessons,
    createLesson,
    getLessonsByRouteId
}