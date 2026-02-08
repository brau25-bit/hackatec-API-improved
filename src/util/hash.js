import { hash, compare } from "bcrypt";

export const hashService = {
    hash: (password) => hash(password, 10),
    compare: (password, hashPassword) => compare(password, hashPassword)
}