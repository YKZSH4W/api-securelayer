const enrollsService = require('../services/enrolls.service')

const getEnrolls = async (req, res, next) => {
    try {
        const enrolls = await enrollsService.getEnrolls()
        res.json(enrolls)
    } catch (error) {
        next(error)
    }
}

const createEnroll = async (req, res, next) => {
    try {
        const { userId, routeId } = req.body
        const enroll = await enrollsService.createEnroll({
            userId,
            routeId,
            enrollmentDate: new Date(),
            isCompleted: false
        })
        res.status(201).json(enroll)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getEnrolls,
    createEnroll
}