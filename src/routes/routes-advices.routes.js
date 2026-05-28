const express = require('express')
const router = express.Router()
const { getRoutesAdvices, createRouteAdvice, getRouteAdvicesById } = require('../controllers/routes-advices.controller')

router.get('/', getRoutesAdvices)

router.post('/', createRouteAdvice)

router.get('/route/:routeId', getRouteAdvicesById)

module.exports = router
