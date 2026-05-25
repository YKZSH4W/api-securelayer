const express = require('express')
const router = express.Router()
const { createActivityProgress, getActivitiesProgress, getActivitiesProgressByActivityId,
        getActivitiesProgressByUserId, getProgressByUserAndActivity } = require('../services/activities-progress.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getActivitiesProgress())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const activity = await createActivityProgress(req.body)
        res.status(201).json(activity)
    } catch (error) {
        next(error)
    }
})

router.get('/activity/:activityId', async (req, res, next) => {
    try {
        const { activityId } = req.params
        res.json(await getActivitiesProgressByActivityId(activityId))
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params
        res.json(await getActivitiesProgressByUserId(userId))
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId/activity/:activityId', async (req, res, next) => {
    try {
        const { userId, activityId } = req.params
        res.json(await getProgressByUserAndActivity(userId, activityId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
