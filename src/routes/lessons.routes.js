const express = require('express')
const router = express.Router()
const { getLessons, createLesson, getLessonsByRouteId } = require('../controllers/lessons.controller')

router.get('/', getLessons)

router.post('/', createLesson)

router.get('/route/:routeId', getLessonsByRouteId)

module.exports = router
