const prisma = require('../config/prisma')

const getLessonsAdvices = async () => {
    return await prisma.lessonsAdvices.findMany()
}

const createLessonAdvice = async (data) => {
    return await prisma.lessonsAdvices.create({
        data: {
            ...data
        }
    })
}

const getLessonsAdvicesById = async (lessonId) => {
    return await prisma.lessonsAdvices.findMany({
        where: {
            lessonId: parseInt(lessonId)
        }
    })
}

module.exports = {
    getLessonsAdvices,
    createLessonAdvice,
    getLessonsAdvicesById
}