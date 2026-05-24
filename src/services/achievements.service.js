const prisma = require('../config/prisma')

const getAchievements = async () => {
    return await prisma.achievements.findMany()
}

const createAchievement = async (data) => {
    return await prisma.achievements.create({
        data: {
            ...data
        }
    })
}

module.exports = {
    getAchievements,
    createAchievement,
}