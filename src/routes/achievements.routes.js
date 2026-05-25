const express = require('express')
const router = express.Router()
const { createAchievement, getAchievements } = require('../services/achievements.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getAchievements())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const achievement = await createAchievement(req.body)
        res.status(201).json(achievement)
    } catch (error) {
        next(error)
    }
})

module.exports = router
