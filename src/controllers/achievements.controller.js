const achievementService = require('../services/achievements.service')

const getAchievements = async (req, res, next) => {
    try {
        const achievements = await achievementService.getAchievements()
        res.json(achievements)
    } catch (error) {
        next(error)
    }
}

const createAchievement = async (req, res, next) => {
    try {
        const { name, description, icon, requiredXp } = req.body
        const achievement = await achievementService.createAchievement({
            name,
            description,
            icon,
            requiredXp
        })
        res.status(201).json(achievement)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAchievements,
    createAchievement
}