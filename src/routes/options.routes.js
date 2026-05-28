const express = require('express')
const router = express.Router()
const { getOptions, createOption, getOptionsByQuestionId } = require('../controllers/options.controller')

router.get('/', getOptions)

router.post('/', createOption)

router.get('/question/:questionId', getOptionsByQuestionId)

module.exports = router
