const express = require('express')
const router = express.Router()
const { createEnroll, getEnrolls } = require('../services/enrolls.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getEnrolls())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const lesson = await createEnroll(req.body)
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
})

module.exports = router
