const prisma = require('../config/prisma')

const getPhishingSimulations = async () => {
    return await prisma.phishingSimulations.findMany()
}

const createPhishingSimulation = async (data) => {
    return await prisma.phishingSimulations.create({
        data: {
            ...data
        }
    })
}

const getPhishingSimulationsByActivityId = async (id) => {
    return await prisma.phishingSimulations.findMany({
        where: {
            activityId: parseInt(id)
        }
    })
}


module.exports = {
    getPhishingSimulations,
    createPhishingSimulation,
    getPhishingSimulationsByActivityId
}