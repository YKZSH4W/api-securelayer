const prisma = require('../config/prisma')

const getActivities = async () => {
    return await prisma.activities.findMany()
}

const createActivity = async (data) => {
    return await prisma.activities.create({
        data: {
            ...data
        }
    })
}

module.exports = {
    getActivities,
    createActivity
}