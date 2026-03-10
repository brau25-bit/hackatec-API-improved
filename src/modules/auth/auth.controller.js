import { AuthService } from "./auth.service.js";

export class AuthController{
    static async createUser(req, res){
        try {
            const data = req.validated

            const result = await AuthService.createUser(data)

            return res.status(201).json({
                message: result
            })
        } catch (error) {
            if(error.message === "credenciales-invalidas") return res.status(400).json({message: "Credenciales invalidas"})
        }
    }

    static async login(req, res){
        try {
            const data = req.validated

            const result = await AuthService.login(data)

            return res.status(200).json({
                result
            })
        } catch (error) {
            return res.status(404).json({message: error.message})
        }
    }

    static async resetPassword(req, res){
        try {
            const data = req.validated
            const result = await AuthService.resetPassword(data)
            return res.status(200).json({
                message: "Contraseña restablecida correctamente"
            })
        } catch (error) {
            return res.status(404).json({message: error.message})
        }
    }

    static async recoverPassword(req, res){
        try {
            const email = req.validated

            await AuthService.recoverPassword(email)

            return res.status(200).json({message: "Codigo generado correctamente"})
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    }
}