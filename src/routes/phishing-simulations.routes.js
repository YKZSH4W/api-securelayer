const express = require('express')
const router = express.Router()
const { createPhishingSimulation, getPhishingSimulationById, getPhishingSimulations } = require('../services/phishing-simulations.service')

router.get('/', async (req, res) => {
    res.json(await getPhishingSimulations())
})

router.post('/', async (req, res) => {
    const lesson = await createPhishingSimulation(req.body)
    res.status(201).json(lesson)
})

router.get('/:phishingSimulationId', async (req, res) => {
    const { phishingSimulationId } = req.params
    res.json(await getPhishingSimulationById(phishingSimulationId))
})

module.exports = router