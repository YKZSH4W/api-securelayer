const express = require('express')
const router = express.Router()
const { createQuestion, getQuestions, getQuestionsByActivityId } = require('../services/questions.service')

router.get('/', async (req, res) => {
    res.json(await getQuestions())
})

router.post('/', async (req, res) => {
    const question = await createQuestion(req.body)
    res.status(201).json(question)
})

router.get('/:activityId', async (req, res) => {
    const { activityId } = req.params
    res.json(await getQuestionsByActivityId(activityId))
})

module.exports = router