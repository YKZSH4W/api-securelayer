const express = require('express')
const router = express.Router()
const { createLesson, getLessons } = require('../services/lessons.service')

router.get('/', async (req, res) => {
    res.json(await getLessons())
})

router.post('/', async (req, res) => {
    const lesson = await createLesson(req.body)
    res.status(201).json(lesson)
})

module.exports = router