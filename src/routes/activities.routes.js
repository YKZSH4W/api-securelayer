const express = require('express')
const router = express.Router()
const { createActivity, getActivities, getActivitiesByLessonId } = require('../services/activities.service')

router.get('/', async (req, res) => {
    res.json(await getActivities())
})

router.post('/', async (req, res) => {
    const activity = await createActivity(req.body)
    res.status(201).json(activity)
})

router.get('/:lessonId', async (req, res) => {
    const { lessonId } = req.params
    const activities = await getActivitiesByLessonId(lessonId)
    res.json(activities)
})

module.exports = router