const { Prisma } = require('@prisma/client')

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2003') {
            return res.status(400).json({
                message: 'El valor proporcionado no existe como registro válido (llave foranea invalida)'
            })
        }

        if (err.code === 'P2002') {
            return res.status(409).json({
                message: 'Ya existe un registro con ese valor único'
            })
        }

        if (err.code === 'P2025') {
            return res.status(404).json({
                message: 'Registro no encontrado'
            })
        }
    }

    res.status(500).json({
        message: 'Error interno del servidor'
    })
}

module.exports = errorMiddleware