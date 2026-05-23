const express = require('express')
const router = express.Router()
const { createOption, getOptions, getOptionsByQuestionId} = require('../services/options.service')

router.get('/', async (req, res) => {
    res.json(await getOptions())
})

router.post('/', async (req, res) => {
    const option = await createOption(req.body)
    res.status(201).json(option)
})

router.get('/:questionId', async (req, res) => {
    const { questionId } = req.params
    res.json(await getOptionsByQuestionId(questionId))
})

module.exports = router