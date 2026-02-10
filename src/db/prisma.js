import { PrismaClient } from "../../generated/prisma/index.js"

const globalPrisma = global

const prisma = globalPrisma.prisma || new PrismaClient()

export default prisma