const express = require('express')
const router = express.Router()
const { createQuestion, getQuestions } = require('../services/questions.service')

router.get('/', async (req, res) => {
    res.json(await getQuestions())
})

router.post('/', async (req, res) => {
    const question = await createQuestion(req.body)
    res.status(201).json(question)
})

module.exports = router