const enrollService = require('../services/enrolls.service')

const getEnrolls = async (req, res, next) => {
    try {
        const enrolls = await enrollService.getEnrolls()
        res.json(enrolls)
    } catch (error) {
        next(error)
    }
}

const createEnroll = async (req, res, next) => {
    try {
        const { userId, routeId } = req.body
        const enroll = await enrollService.createEnroll({
            userId,
            routeId,
        })
        res.status(201).json(enroll)
    } catch (error) {
        next(error)
    }
}

const getEnrollsByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params
        const enrolls = await enrollService.getEnrollsByUserId(userId)
        res.json(enrolls)
    } catch (error) {
        next(error)
    }
}

const completeRouteAndAdvance = async (req, res, next) => {
    try {
        const { userId, routeId } = req.body
        const result = await enrollService.completeRouteAndAdvance(userId, routeId)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getEnrolls,
    createEnroll,
    getEnrollsByUserId,
    completeRouteAndAdvance
}