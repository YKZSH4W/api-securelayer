const express = require('express')
const router = express.Router()
const { createUserAchievement, getUsersAchievements, getUserAchievementsByUserId } = require('../services/users-achievements.service')

router.get('/', async (req, res) => {
    res.json(await getUsersAchievements())
})

router.post('/', async (req, res) => {
    const userAchievement = await createUserAchievement(req.body)
    res.status(201).json(userAchievement)
})

router.get('/:userId', async (req, res) => {
    const { userId } = req.params
    res.json(await getUserAchievementsByUserId(userId))
})

module.exports = router