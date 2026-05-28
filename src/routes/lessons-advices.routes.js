const express = require('express')
const router = express.Router()
const { getLessonsAdvices, createLessonAdvice, getLessonsAdvicesById } = require('../controllers/lessons-advices.controller')

router.get('/', getLessonsAdvices)

router.post('/', createLessonAdvice)

router.get('/lesson/:lessonId', getLessonsAdvicesById)

module.exports = router
