const prisma = require('../config/prisma')

const getUsers = async () => {
    return await prisma.users.findMany()
}

const createUser = async (data) => {
    const [day, month, year] = data.birthDate.split('/')
    return await prisma.users.create({
        data: {
            ...data,
            birthDate: new Date(`${year}-${month}-${day}`),
            lastAccessed: new Date()
        }
    })
}

const getUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: { email }
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserByEmail
}