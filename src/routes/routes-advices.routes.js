const express = require('express')
const router = express.Router()
const { createRouteAdvice, getRoutesAdvices, getRouteAdvicesById } = require('../services/routes-advices.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getRoutesAdvices())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const lesson = await createRouteAdvice(req.body)
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
})

router.get('/route/:routeId', async (req, res, next) => {
    try {
        const { routeId } = req.params
        res.json(await getRouteAdvicesById(routeId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
