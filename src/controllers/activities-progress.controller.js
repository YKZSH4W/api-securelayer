const activityProgressService = require('../services/activities-progress.service')

const getActivitiesProgress = async (req, res, next) => {
    try {
        const activities = await activityProgressService.getActivitiesProgress()
        res.json(activities)
    } catch (error) {
        next(error)
    }
}

const createActivityProgress = async (req, res, next) => {
    try {
        const { userId, activityId } = req.body
        const activityProgress = await activityProgressService.createActivityProgress({
            userId,
            activityId
        })
        res.status(201).json(activityProgress)
    } catch (error) {
        next(error)
    }
}

const getActivitiesProgressByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params
        const activitiesProgress = await activityProgressService.getActivitiesProgressByUserId(userId)
        res.json(activitiesProgress)
    } catch (error) {
        next(error)
    }
}

const getActivitiesProgressByActivityId = async (req, res, next) => {
    try {
        const { activityId } = req.params
        const activitiesProgress = await activityProgressService.getActivitiesProgressByActivityId(activityId)
        res.json(activitiesProgress)
    } catch (error) {
        next(error)
    }
}

const getProgressByUserAndActivity = async (req, res, next) => {
    try {
        const { userId, activityId } = req.params
        const progress = await activityProgressService.getProgressByUserAndActivity(userId, activityId)
        res.json(progress)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getActivitiesProgress,
    createActivityProgress,
    getActivitiesProgressByUserId,
    getActivitiesProgressByActivityId,
    getProgressByUserAndActivity
}