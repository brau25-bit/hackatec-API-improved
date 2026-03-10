import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import {loginLimiter} from '../../middleware/limiter.js';
import { validateSchema } from "../../middleware/validateSchema.js";
import { userSchema, partialUserSchema } from "../../schemas/user.schema.js";

const authRouter = Router()

authRouter.post('/register', loginLimiter, validateSchema(userSchema), AuthController.createUser)

authRouter.post('/login', loginLimiter, validateSchema(partialUserSchema), AuthController.login)

authRouter.post('/recover-password', validateSchema(partialUserSchema), AuthController.recoverPassword)

authRouter.post('/reset-password', validateSchema(partialUserSchema), AuthController.resetPassword)


export default authRouter