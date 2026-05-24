const prisma = require('../config/prisma')

const getActivities = async () => {
    return await prisma.activities.findMany()
}

const createActivity = async (data) => {
    return await prisma.activities.create({
        data: {
            ...data
        }
    })
}

const getActivitiesByLessonId = async (lessonId) => {
    return await prisma.activities.findMany({
        where: {
            lessonId: parseInt(lessonId)
        }
    })
}

module.exports = {
    getActivities,
    createActivity,
    getActivitiesByLessonId
}