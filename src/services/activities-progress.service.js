const prisma = require('../config/prisma')

const getActivitiesProgress = async () => {
    return await prisma.activitiesProgress.findMany()
}

const createActivityProgress = async (data) => {
    return await prisma.activitiesProgress.create({
        data: {
            ...data,
            progress: 0,
            isCompleted: false
        }
    })
}

const getActivitiesProgressByUserId = async (userId) => {
    return await prisma.activitiesProgress.findMany({
        where: {
            userId: parseInt(userId)
        }
    })
}

const getActivitiesProgressByActivityId = async (activityId) => {
    return await prisma.activitiesProgress.findMany({
        where: {
            activityId: parseInt(activityId)
        }
    })
}

const getProgressByUserAndActivity = async (userId, activityId) => {
    return await prisma.activitiesProgress.findFirst({
        where: {
            userId: parseInt(userId),
            activityId: parseInt(activityId)
        }
    })
}

// Marca una actividad como completada para un usuario y le otorga la XP de la actividad.
// Es idempotente: si ya estaba completada devuelve alreadyCompleted = true y NO suma XP de nuevo.
const completeActivity = async (userId, activityId) => {
    const usId = parseInt(userId)
    const actId = parseInt(activityId)

    const existing = await prisma.activitiesProgress.findFirst({
        where: { userId: usId, activityId: actId }
    })

    // Ya estaba completada → no se otorga XP de nuevo
    if (existing && existing.isCompleted) {
        const user = await prisma.users.findUnique({ where: { id: usId } })
        return {
            progress: existing,
            alreadyCompleted: true,
            xpAwarded: 0,
            totalXp: user?.totalXp ?? 0
        }
    }

    // Primera vez que se completa → se otorga la XP de la actividad
    const activity = await prisma.activities.findUnique({ where: { id: actId } })
    const xp = activity?.xp ?? 0

    // Transacción: marcar el progreso y sumar la XP al usuario de forma atómica
    const result = await prisma.$transaction(async (tx) => {
        const progress = existing
            ? await tx.activitiesProgress.update({
                where: { id: existing.id },
                data: { isCompleted: true, progress: 100 }
            })
            : await tx.activitiesProgress.create({
                data: { userId: usId, activityId: actId, progress: 100, isCompleted: true }
            })

        const user = await tx.users.update({
            where: { id: usId },
            data: { totalXp: { increment: xp } }
        })

        return { progress, totalXp: user.totalXp }
    })

    return {
        progress: result.progress,
        alreadyCompleted: false,
        xpAwarded: xp,
        totalXp: result.totalXp
    }
}

module.exports = {
    getActivitiesProgress,
    createActivityProgress,
    getActivitiesProgressByUserId,
    getActivitiesProgressByActivityId,
    getProgressByUserAndActivity,
    completeActivity
}