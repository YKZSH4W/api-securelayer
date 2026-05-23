const routeService = require('../services/routes.service')

const getRoutes = async (req, res, next) => {
    try {
        const routes = await routeService.getRoutes()
        res.json(routes)
    } catch (error) {
        next(error)
    }
}

const createRoute = async (req, res, next) => {
    try {
        const { level, name, difficulty, description } = req.body
        const route = await routeService.createRoute({
            level,
            name,
            difficulty,
            description
        })
        res.status(201).json(route)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getRoutes,
    createRoute
}