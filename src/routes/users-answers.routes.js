const express = require('express')
const router = express.Router()
const { createUserAnswer, getUserAnswersByAttemptAndQuestion,
    getUserAnswersByAttemptId, getUserAnswersByQuestionId, getUsersAnswers } = require('../controllers/users-answers.controller')

router.get('/', getUsersAnswers)

router.post('/', createUserAnswer)

router.get('/attempt/:attemptId', getUserAnswersByAttemptId)

router.get('/question/:questionId', getUserAnswersByQuestionId)

router.get('/attempt/:attemptId/question/:questionId', getUserAnswersByAttemptAndQuestion)

module.exports = router