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

const getPhishingSimulationById = async (id) => {
    return await prisma.phishingSimulations.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}


module.exports = {
    getPhishingSimulations,
    createPhishingSimulation,
    getPhishingSimulationById
}