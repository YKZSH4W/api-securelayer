const express = require('express')
const router = express.Router()
const { createUserAnswer, getUserAnswersByAttemptAndQuestion,
    getUserAnswersByAttemptId, getUserAnswersByQuestionId, getUsersAnswers } = require('../services/users-answers.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getUsersAnswers())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const userAnswer = await createUserAnswer(req.body)
        res.status(201).json(userAnswer)
    } catch (error) {
        next(error)
    }
})

router.get('/attempt/:attemptId', async (req, res, next) => {
    try {
        const { attemptId } = req.params
        res.json(await getUserAnswersByAttemptId(attemptId))
    } catch (error) {
        next(error)
    }
})

router.get('/question/:questionId', async (req, res, next) => {
    try {
        const { questionId } = req.params
        res.json(await getUserAnswersByQuestionId(questionId))
    } catch (error) {
        next(error)
    }
})

router.get('/attempt/:attemptId/question/:questionId', async (req, res, next) => {
    try {
        const { attemptId, questionId } = req.params
        res.json(await getUserAnswersByAttemptAndQuestion(attemptId, questionId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
