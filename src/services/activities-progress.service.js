const prisma = require('../config/prisma')

const getActivitiesProgress = async () => {
    return await prisma.activitiesProgress.findMany()
}

const createActivityProgress = async (data) => {
    return await prisma.activitiesProgress.create({
        data: {
            ...data,
            progress: 0,
            isCompleted: false
        }
    })
}

const getActivitiesProgressByUserId = async (userId) => {
    return await prisma.activitiesProgress.findMany({
        where: {
            userId: parseInt(userId)
        }
    })
}

const getActivitiesProgressByActivityId = async (activityId) => {
    return await prisma.activitiesProgress.findMany({
        where: {
            activityId: parseInt(activityId)
        }
    })
}

const getProgressByUserAndActivity = async (userId, activityId) => {
    return await prisma.activitiesProgress.findFirst({
        where: {
            userId: parseInt(userId),
            activityId: parseInt(activityId)
        }
    })
}

module.exports = {
    getActivitiesProgress,
    createActivityProgress,
    getActivitiesProgressByUserId,
    getActivitiesProgressByActivityId,
    getProgressByUserAndActivity
}