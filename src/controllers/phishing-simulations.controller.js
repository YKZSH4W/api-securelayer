const phishingSimulationService = require('../services/phishing-simulations.service')

const getPhishingSimulations = async (req, res, next) => {
    try {
        const routes = await phishingSimulationService.getPhishingSimulations()
        res.json(routes)
    } catch (error) {
        next(error)
    }
}

const createPhishingSimulation = async (req, res, next) => {
    try {
        const { activityId, typeMessage, sender, content, isScam } = req.body
        const phishingSimulation = await phishingSimulationService.createPhishingSimulation({
            activityId,
            typeMessage,
            sender,
            content,
            isScam
        })
        res.status(201).json(phishingSimulation)
    } catch (error) {
        next(error)
    }
}

const getPhishingSimulationById = async (req, res, next) => {
    try {
        const { id } = req.params
        const phishingSimulation = await phishingSimulationService.getPhishingSimulationById(id)
        res.json(phishingSimulation)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPhishingSimulations,
    createPhishingSimulation,
    getPhishingSimulationById
}