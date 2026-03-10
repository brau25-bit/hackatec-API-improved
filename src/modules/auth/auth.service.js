import { hashService } from "../../util/hash.js";
import { jsonwebtokenService } from "../../util/jsonwebtokens.js";
import prisma from "../../db/prisma.js"
import { generateCode } from "../../util/verificationCode.js";
import { sendCodePasswordReset } from "../../util/emailService.js";

export class AuthService{
    static async createUser(data){
        try {        
            const user = await prisma.user.findUnique({where: {email: data.email}})

            if(user) throw new Error("credenciales-invalidas");
            
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

    static async login(data){
        try {
            const user = await prisma.user.findUnique({
                where: {email: data.email},
                select: {
                    name: true,
                    password: true,
                    lastname: true,
                    state: true,
                    area: true,
                    cp: true,
                }})

            if(!user) throw new Error("Usuario no encontrado");
            
            const pass = await hashService.compare(data.password, user.password)

            if(!pass) throw new Error("Credeniales invalidas");
            
            const dataToken = {
                email: user.email,
                name: user.name,
                id: user.id,
                isActive: user.isActive
            }

            const token = await jsonwebtokenService.sign(dataToken)

            return {
                token: token,
                data: {
                    name: user.name,
                    lastname: user.lastname,
                    state: user.state,
                    area: user.area,
                    cp: user.cp     
                }
            }
        } catch (error) {
            throw error
        }
    }

    static async recoverPassword(data){
        try {
            const user = await prisma.user.findUnique({where: {email: data.email}})

            if(!user) throw new Error("Credenciales invalidas");
            
            const newCode = await generateCode()

            await prisma.user.update({
                where: {email: user.email},
                data: {passwordResetCode: newCode}
            })

            await sendCodePasswordReset(user.email, newCode)
        } catch (error) {
            throw error
        }
    }
    static async resetPassword(data){
        try {
            const user = await prisma.user.findUnique({
                where: {email: data.email},
                select: {
                    password: true,
                    passwordResetCode: true
                }
            })

            if(data.passwordResetCode != user.passwordResetCode) throw new Error("Codigo invalido");

            const newPassword = await hashService.hash(data.password)

            await prisma.user.update({
                where: {email: data.email},
                data: {password: newPassword}
            })
        } catch (error) {
            throw error            
        }
    } 
}