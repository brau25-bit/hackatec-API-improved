import jwtService from '../util/jsonwebtokens.js'

export function verifyToken() {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization

      if (!authHeader) {
        return res.status(401).json({ message: "Token no proporcionado" })
      }

      const parts = authHeader.split(' ')

      if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ message: "Formato de token inválido" })
      }

      const token = parts[1]

      const payload = await jwtService.verify(token)

      if (!payload) {
        return res.status(401).json({ message: "Token inválido" })
      }

      req.user = {
        id: payload.id
      }

      next()

    } catch (error) {
      return res.status(401).json({ message: "Token inválido o expirado" })
    }
  }
}