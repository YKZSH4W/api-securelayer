const express = require('express')
const router = express.Router()
const { createOption, getOptions, getOptionsByQuestionId} = require('../services/options.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getOptions())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const option = await createOption(req.body)
        res.status(201).json(option)
    } catch (error) {
        next(error)
    }
})

router.get('/question/:questionId', async (req, res, next) => {
    try {
        const { questionId } = req.params
        res.json(await getOptionsByQuestionId(questionId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
