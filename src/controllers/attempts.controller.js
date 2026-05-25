const attemptService = require('../services/attempts.service')

const getAttempts = async (req, res, next) => {
    try {
        const attempts = await attemptService.getAttempts()
        res.json(attempts)
    } catch (error) {
        next(error)
    }
}

const createAttempt = async (req, res, next) => {
    try {
        const { userId, activityId, isCorrect, score } = req.body
        const attempt = await attemptService.createAttempt({
            userId,
            activityId,
            isCorrect,
            score
        })
        res.status(201).json(attempt)
    } catch (error) {
        next(error)
    }
}

const getAttemptByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params
        const attempt = await attemptService.getAttemptByUserId(userId)
        res.json(attempt)
    } catch (error) {
        next(error)
    }
}

const getAttemptsByActivityId = async (req, res, next) => {
    try {
        const { activityId } = req.params
        const attempts = await attemptService.getAttemptsByActivityId(activityId)
        res.json(attempts)
    } catch (error) {
        next(error)
    }
}

const getUserAttemptsByActivityId = async (req, res, next) => {
    try {
        const { activityId, userId } = req.params
        const attempts = await attemptService.getUserAttemptsByActivityId(activityId, userId)
        res.json(attempts)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAttempts,
    createAttempt,
    getAttemptByUserId,
    getAttemptsByActivityId,
    getUserAttemptsByActivityId
}