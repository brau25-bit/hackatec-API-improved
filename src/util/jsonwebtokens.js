import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const jsonwebtokenService = {
    sign: async (payload) => jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60), data: payload,}, process.env.SECRET_KEY),
    verify: async (payload) => jwt.verify(payload, process.env.SECRET_KEY)
}