const prisma = require('../config/prisma')

const getLessons = async () => {
    return await prisma.lessons.findMany()
}

const createLesson = async (data) => {
    return await prisma.lessons.create({
        data: {
            ...data
        }
    })
}

module.exports = {
    getLessons,
    createLesson
}