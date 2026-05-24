const express = require('express')
const router = express.Router()
const { createLessonAdvice, getLessonsAdvices, getLessonsAdvicesById } = require('../services/lessons-advices.service')

router.get('/', async (req, res) => {
    res.json(await getLessonsAdvices())
})

router.post('/', async (req, res) => {
    const lesson = await createLessonAdvice(req.body)
    res.status(201).json(lesson)
})

router.get('/:lessonId', async (req, res) => {
    const { lessonId } = req.params
    res.json(await getLessonsAdvicesById(lessonId))
})

module.exports = router