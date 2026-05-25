const express = require('express')
const router = express.Router()
const { createPhishingSimulation, getPhishingSimulationsByActivityId, getPhishingSimulations } = require('../services/phishing-simulations.service')

router.get('/', async (req, res, next) => {
    try {
        res.json(await getPhishingSimulations())
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const lesson = await createPhishingSimulation(req.body)
        res.status(201).json(lesson)
    } catch (error) {
        next(error)
    }
})

router.get('/activity/:activityId', async (req, res, next) => {
    try {
        const { activityId } = req.params
        res.json(await getPhishingSimulationsByActivityId(activityId))
    } catch (error) {
        next(error)
    }
})

module.exports = router
