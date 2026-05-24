const prisma = require('../config/prisma')

const getLessonsProgress = async () => {
    return await prisma.lessonsProgress.findMany()
}

const createLessonProgress = async (data) => {
    return await prisma.lessonsProgress.create({
        data: {
            ...data,
            progress: 0,
            isCompleted: false
        }
    })
}

const getLessonsProgressByUserId = async (userId) => {
    return await prisma.lessonsProgress.findMany({
        where: {
            userId: parseInt(userId)
        }
    })
}

const getLessonsProgressByLessonId = async (lessonId) => {
    return await prisma.lessonsProgress.findMany({
        where: {
            lessonId: parseInt(lessonId)
        }
    })
}

const getProgressByUserAndLesson = async (userId, lessonId) => {
    return await prisma.lessonsProgress.findFirst({
        where: {
            userId: parseInt(userId),
            lessonId: parseInt(lessonId)
        }
    })
}

module.exports = {
    getLessonsProgress,
    createLessonProgress,
    getLessonsProgressByUserId,
    getLessonsProgressByLessonId,
    getProgressByUserAndLesson
}