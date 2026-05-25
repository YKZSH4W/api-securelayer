const express = require('express')
const router = express.Router()
const { createActivity, getActivities, getActivitiesByLessonId } = require('../services/activities.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getActivities())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const activity = await createActivity(req.body)
        res.status(201).json(activity)
    } catch (error) {
        next(error)
    }
})

router.get('/lesson/:lessonId', async (req, res, next) => {
    try {
        const { lessonId } = req.params
        const activities = await getActivitiesByLessonId(lessonId)
        res.json(activities)
    } catch (error) {
        next(error)
    }
})

module.exports = router
