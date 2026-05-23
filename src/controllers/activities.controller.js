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
        const { lessonId, name, description, icon, type } = req.body
        const activity = await activityService.createActivity({
            lessonId,
            name,
            description,
            icon,
            type
        })
        res.status(201).json(activity)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getActivities,
    createActivity
}