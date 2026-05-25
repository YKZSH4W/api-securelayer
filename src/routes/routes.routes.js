const express = require('express')
const router = express.Router()
const { createRoute, getRoutes } = require('../services/routes.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getRoutes())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const route = await createRoute(req.body)
        res.status(201).json(route)
    } catch (error) {
        next(error)
    }
})

module.exports = router
