const express = require('express')
const router = express.Router()
const { createLessonAdvice, getLessonsAdvices, getLessonsAdvicesById } = require('../services/lessons-advices.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getLessonsAdvices())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const lesson = await createLessonAdvice(req.body)
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
})

router.get('/lesson/:lessonId', async (req, res, next) => {
    try {
        const { lessonId } = req.params
        res.json(await getLessonsAdvicesById(lessonId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
