const express = require('express')
const router = express.Router()
const { getLessonsProgress, createLessonProgress, getLessonsProgressByUserId,
        getLessonsProgressByLessonId, getProgressByUserAndLesson } = require('../controllers/lessons-progress.controller')

router.get('/', getLessonsProgress)

router.post('/', createLessonProgress)

router.get('/lesson/:lessonId', getLessonsProgressByLessonId)

router.get('/user/:userId', getLessonsProgressByUserId)

router.get('/user/:userId/lesson/:lessonId', getProgressByUserAndLesson)

module.exports = router
