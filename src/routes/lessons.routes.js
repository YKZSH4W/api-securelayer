const express = require('express')
const router = express.Router()
const { getLessons, createLesson, getLessonsByRouteId, getLessonsByRouteWithProgress } = require('../controllers/lessons.controller')

router.get('/', getLessons)

router.post('/', createLesson)

router.get('/route/:routeId', getLessonsByRouteId)

router.get('/route/:routeId/user/:userId', getLessonsByRouteWithProgress)

module.exports = router
