const express = require('express')
const router = express.Router()
const { createLessonProgress, getLessonsProgress, getLessonsProgressByLessonId, 
        getLessonsProgressByUserId, getProgressByUserAndLesson } = require('../services/lessons-progress.service')

router.get('/', async (req, res) => {
    res.json(await getLessonsProgress())
})

router.post('/', async (req, res) => {
    const lesson = await createLessonProgress(req.body)
    res.status(201).json(lesson)
})

router.get('/lesson/:lessonId', async (req, res) => {
    const { lessonId } = req.params
    res.json(await getLessonsProgressByLessonId(lessonId))
})

router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params
    res.json(await getLessonsProgressByUserId(userId))
})

router.get('/user/:userId/lesson/:lessonId', async (req, res) => {
    const { userId, lessonId } = req.params
    res.json(await getProgressByUserAndLesson(userId, lessonId))
})

module.exports = router