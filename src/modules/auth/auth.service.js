import { hashService } from "../../util/hash.js";
import prisma from "../../db/prisma.js"

export class AuthService{
    static async createUser(data){
        try {
            const user = await prisma.user.findUnique({where: {email: data.email}})

            if(user) throw new Error("credenciales-invalidas")
        
            const password = await hashService.hash(data.password)

            const newUser = {
                ...data,
                password
            }

            const createUser = await prisma.user.create({data: newUser})

            if(!createUser) throw new Error("credenciales-invalidas");

            return "Creado exitosamente"
        } catch (error) {
            throw error
        }
    }
}