const { Prisma } = require('@prisma/client')

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Error de Prisma:', err)
        if (err.code === 'P2003') {
            return res.status(400).json({
                message: 'El valor proporcionado no existe como registro válido (llave foranea invalida)'
            })
        }

        if (err.code === 'P2002') {
            const constraintIndex = err.meta?.driverAdapterError?.cause?.constraint?.index
            const field = constraintIndex
                ? constraintIndex.replace(/^[^_]+_/, '').replace(/_key$/, '')
                : null
            return res.status(409).json({
                message: field ? `Ya existe un registro con ese ${field}` : 'Ya existe un registro con ese valor único',
                field
            })
        }

        if (err.code === 'P2025') {
            return res.status(404).json({
                message: 'Registro no encontrado'
            })
        }
    }

    console.error(err)
    res.status(500).json({
        message: 'Error interno del servidor'
    })
}

module.exports = errorMiddleware