import { AuthService } from "./auth.service.js";

export class AuthController{
    static async createUser(req, res){
        try {
            const data = req.validated

            const result = await AuthService.createUser(data)

            return res.status(201).json({
                result
            })
        } catch (error) {
            if(error.message === "fallo-creacion-usuario") return res.status(404).json({message: "Fallo"})
            
            if(error.message === "credenciales-invalidas") return res.status(400).json({message: "Credenciales invalidas"})
        }
    }

    static async login(req, res){
        try {
            
        } catch (error) {
            
        }
    }

}