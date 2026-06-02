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

const getLessonsByRouteWithProgress = async (routeId, userId) => {
    const usid = parseInt(userId)

    const lessons = await prisma.lessons.findMany({
        where: { routeId: parseInt(routeId) },
        orderBy: { id: 'asc' },
        include: {
            activities: {
                include: {
                    activitiesProgress: {
                        where: { userId: usid }
                    }
                }
            }
        }
    })

    return lessons.map((lesson) => {
        const totalActivities = lesson.activities.length
        const completedActivities = lesson.activities.filter((activity) =>
            activity.activitiesProgress.some((p) => p.isCompleted)
        ).length

        const isCompleted = totalActivities > 0 && completedActivities === totalActivities

        return {
            id: lesson.id,
            routeId: lesson.routeId,
            name: lesson.name,
            description: lesson.description,
            icon: lesson.icon,
            isCompleted
        }
    })
}

module.exports = {
    getLessons,
    createLesson,
    getLessonsByRouteId,
    getLessonsByRouteWithProgress
}