const prisma = require('../config/prisma')

const getAttempts = async () => {
    return await prisma.attempts.findMany()
}

const createAttempt = async (data) => {
    return await prisma.attempts.create({
        data: {
            ...data,
            attemptDate: new Date()
        }
    })
}

const getAttemptByUserId = async (id) => {
    return await prisma.attempts.findMany({
        where: {
            userId: parseInt(id)
        }
    })
}

const getAttemptsByActivityId = async (id) => {
    return await prisma.attempts.findMany({
        where: {
            activityId: parseInt(id)
        }
    })
}

const getUserAttemptsByActivityId = async (userId, activityId) => {
    return await prisma.attempts.findMany({
        where: {
            userId: parseInt(userId),
            activityId: parseInt(activityId)
        }
    })
}

module.exports = {
    getAttempts,
    createAttempt,
    getAttemptByUserId,
    getAttemptsByActivityId,
    getUserAttemptsByActivityId
}