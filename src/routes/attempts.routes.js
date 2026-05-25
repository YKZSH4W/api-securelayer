const express = require('express')
const router = express.Router()
const { createAttempt, getAttemptByUserId, getAttempts,
        getAttemptsByActivityId, getUserAttemptsByActivityId } = require('../services/attempts.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getAttempts())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const attempt = await createAttempt(req.body)
        res.status(201).json(attempt)
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params
        const attempt = await getAttemptByUserId(userId)
        res.json(attempt)
    } catch (error) {
        next(error)
    }
})

router.get('/activity/:activityId', async (req, res, next) => {
    try {
        const { activityId } = req.params
        const attempts = await getAttemptsByActivityId(activityId)
        res.json(attempts)
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId/activity/:activityId', async (req, res, next) => {
    try {
        const { userId, activityId } = req.params
        const attempts = await getUserAttemptsByActivityId(userId, activityId)
        res.json(attempts)
    } catch (error) {
        next(error)
    }
})

module.exports = router
