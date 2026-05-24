const express = require('express')
const router = express.Router()
const { createAchievement, getAchievements } = require('../services/achievements.service')

router.get('/', async (req, res) => {
    res.json(await getAchievements())
})

router.post('/', async (req, res) => {
    const achievement = await createAchievement(req.body)
    res.status(201).json(achievement)
})

module.exports = router