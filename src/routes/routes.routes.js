const express = require('express')
const router = express.Router()
const { getRoutes, createRoute } = require('../controllers/routes.controller')

router.get('/', getRoutes)

router.post('/', createRoute)

module.exports = router
