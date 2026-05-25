const userAchievementService = require('../services/users-achievements.service')

const getUsersAchievements = async (req, res, next) => {
    try {
        const userAchievements = await userAchievementService.getUsersAchievements()
        res.json(userAchievements)
    } catch (error) {
        next(error)
    }
}

const createUserAchievement = async (req, res, next) => {
    try {
        const { userId, achievementId } = req.body
        const userAchievement = await userAchievementService.createUserAchievement({
            userId,
            achievementId,
        })
        res.status(201).json(userAchievement)
    } catch (error) {
        next(error)
    }
}

const getUserAchievementsByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params
        const userAchievements = await userAchievementService.getUserAchievementsByUserId(userId)
        res.json(userAchievements)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getUsersAchievements,
    createUserAchievement,
    getUserAchievementsByUserId
}