const express = require('express')
const router = express.Router()
const { getUsersAchievements, createUserAchievement, getUserAchievementsByUserId } = require('../controllers/users-achievements.controller')

router.get('/', getUsersAchievements)

router.post('/', createUserAchievement)

router.get('/user/:userId', getUserAchievementsByUserId)

module.exports = router
