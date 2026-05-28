const express = require('express')
const router = express.Router()
const { getQuestions, createQuestion, getQuestionsByActivityId } = require('../controllers/questions.controller')

router.get('/', getQuestions)

router.post('/', createQuestion)

router.get('/activity/:activityId', getQuestionsByActivityId)

module.exports = router
