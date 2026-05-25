const express = require('express')
const router = express.Router()
const { createUserAchievement, getUsersAchievements, getUserAchievementsByUserId } = require('../services/users-achievements.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getUsersAchievements())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const userAchievement = await createUserAchievement(req.body)
        res.status(201).json(userAchievement)
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params
        res.json(await getUserAchievementsByUserId(userId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
