const express = require('express')
const router = express.Router()
const { getRoutesAdvices, createRouteAdvice, getRouteAdvicesById, getRouteAdvicesByRouteId } = require('../controllers/routes-advices.controller')

router.get('/', getRoutesAdvices)

router.post('/', createRouteAdvice)

router.get('/route/:routeId', getRouteAdvicesByRouteId)

module.exports = router
