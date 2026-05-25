const express = require('express')
const router = express.Router()
const { createLessonProgress, getLessonsProgress, getLessonsProgressByLessonId,
        getLessonsProgressByUserId, getProgressByUserAndLesson } = require('../services/lessons-progress.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getLessonsProgress())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const lesson = await createLessonProgress(req.body)
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
})

router.get('/lesson/:lessonId', async (req, res, next) => {
    try {
        const { lessonId } = req.params
        res.json(await getLessonsProgressByLessonId(lessonId))
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params
        res.json(await getLessonsProgressByUserId(userId))
    } catch (error) {
        next(error)
    }
})

router.get('/user/:userId/lesson/:lessonId', async (req, res, next) => {
    try {
        const { userId, lessonId } = req.params
        res.json(await getProgressByUserAndLesson(userId, lessonId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
