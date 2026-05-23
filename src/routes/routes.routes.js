const express = require('express')
const router = express.Router()
const { createRoute, getRoutes } = require('../services/routes.service')

router.get('/', async (req, res) => {
    res.json(await getRoutes())
})

router.post('/', async (req, res) => {
    const route = await createRoute(req.body)
    res.status(201).json(route)
})

module.exports = router