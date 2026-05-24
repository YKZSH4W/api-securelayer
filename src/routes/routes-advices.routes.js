const express = require('express')
const router = express.Router()
const { createRouteAdvice, getRoutesAdvices, getRouteAdvicesById } = require('../services/routes-advices.service')

router.get('/', async (req, res) => {
    res.json(await getRoutesAdvices())
})

router.post('/', async (req, res) => {
    const lesson = await createRouteAdvice(req.body)
    res.status(201).json(lesson)
})

router.get('/:routeId', async (req, res) => {
    const { routeId } = req.params
    res.json(await getRouteAdvicesById(routeId))
})

module.exports = router