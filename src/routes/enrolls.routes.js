const express = require('express')
const router = express.Router()
const { createEnroll, getEnrolls } = require('../services/enrolls.service')

router.get('/', async (req, res) => {
    res.json(await getEnrolls())
})

router.post('/', async (req, res) => {
    const lesson = await createEnroll(req.body)
    res.status(201).json(lesson)
})

module.exports = router