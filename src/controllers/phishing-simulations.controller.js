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

const getPhishingSimulationsById = async (req, res, next) => {
    try {
        const { activityId } = req.params
        const phishingSimulation = await phishingSimulationService.getPhishingSimulationsByActivityId(activityId)
        res.json(phishingSimulation)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPhishingSimulations,
    createPhishingSimulation,
    getPhishingSimulationsById
}
