const prisma = require('../config/prisma')

const getUsersAchievements = async () => {
    return await prisma.usersachievements.findMany()
}

const createUserAchievement = async (data) => {
    return await prisma.usersachievements.create({
        data: {
            ...data,
            dateAchieved: new Date()
        }
    })
}

const getUserAchievementsByUserId = async (userId) => {
    return await prisma.usersachievements.findMany({
        where: {
            userId: parseInt(userId)
        },
        orderBy: { dateAchieved: 'asc' },
        include: { achievement: true }
    })
}

module.exports = {
    getUsersAchievements,
    createUserAchievement,
    getUserAchievementsByUserId
}