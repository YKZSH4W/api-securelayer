const routeAdviceService = require('../services/routes-advices.service')

const getRoutesAdvices = async (req, res, next) => {
    try {
        const routes = await routeAdviceService.getRoutesAdvices()
        res.json(routes)
    } catch (error) {
        next(error)
    }
}

const createRouteAdvice = async (req, res, next) => {
    try {
        const { routeId, type, adviceTitle, adviceText } = req.body
        const route = await routeAdviceService.createRouteAdvice({
            routeId,
            type,
            adviceTitle,
            adviceText
        })
        res.status(201).json(route)
    } catch (error) {
        next(error)
    }
}

const getRouteAdvicesById = async (req, res, next) => {
    try {
        const { id } = req.params
        const route = await routeAdviceService.getRouteAdvicesById(id)
        res.json(route)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRoutesAdvices,
    createRouteAdvice,
    getRouteAdvicesById
}