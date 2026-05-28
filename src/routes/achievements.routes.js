const express = require('express')
const router = express.Router()
const { getAchievements, createAchievement } = require('../controllers/achievements.controller')

router.get('/', getAchievements)

router.post('/', createAchievement)

module.exports = router
