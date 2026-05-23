const prisma = require('../config/prisma')

const getRoutes = async () => {
    return await prisma.routes.findMany()
}

const createRoute = async (data) => {
    return await prisma.routes.create({
        data: {
            ...data
        }
    })
}

module.exports = {
    getRoutes,
    createRoute
}