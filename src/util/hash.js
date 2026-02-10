import { hash, compare } from "bcrypt";

export const hashService = {
    hash: async (password) => hash(password, 10),
    compare: async (password, hashPassword) => compare(password, hashPassword)
}