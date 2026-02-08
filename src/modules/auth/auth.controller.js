import { AuthService } from "./auth.service.js";

export class AuthController{
    static async createUser(req, res){
        try {

            return res.json({message: "Usuario creado correctamente"})
        } catch (error) {
            return res.json({
                message: ""
            })
        }
    }

    static async login(req, res){
        try {
            
        } catch (error) {
            
        }
    }

}