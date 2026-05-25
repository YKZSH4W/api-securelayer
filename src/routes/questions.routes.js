const express = require('express')
const router = express.Router()
const { createQuestion, getQuestions, getQuestionsByActivityId } = require('../services/questions.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getQuestions())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const question = await createQuestion(req.body)
        res.status(201).json(question)
    } catch (error) {
        next(error)
    }
})

router.get('/activity/:activityId', async (req, res, next) => {
    try {
        const { activityId } = req.params
        res.json(await getQuestionsByActivityId(activityId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
