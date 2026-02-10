import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import {loginLimiter} from '../../middleware/limiter.js';
import { validateSchema } from "../../middleware/validateSchema.js";
import { userSchema, partialUserSchema } from "../../schemas/user.schema.js";

const authRouter = Router()

authRouter.post('/register',  validateSchema(userSchema), AuthController.createUser)

authRouter.post('/login', loginLimiter, validateSchema(partialUserSchema), AuthController)


export default authRouter