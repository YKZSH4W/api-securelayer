const activityService = require('../services/activities.service')

const getActivities = async (req, res, next) => {
    try {
        const activities = await activityService.getActivities()
        res.json(activities)
    } catch (error) {
        next(error)
    }
}

const createActivity = async (req, res, next) => {
    try {
        const { lessonId, name, description, icon, type, xp } = req.body
        const activity = await activityService.createActivity({
            lessonId,
            name,
            description,
            icon,
            type,
            xp
        })
        res.status(201).json(activity)
    } catch (error) {
        next(error)
    }
}

const getActivitiesByLessonId = async (req, res, next) => {
    try {
        const { lessonId } = req.params
        const activities = await activityService.getActivitiesByLessonId(lessonId)
        res.json(activities)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getActivities,
    createActivity,
    getActivitiesByLessonId
}