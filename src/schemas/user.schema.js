import z from 'zod'

export const userSchema = z.object({
    name: z.string("Campo debe de ser una cadena de texto")
        .min(2, "Nombre demasiado corto")
        .max(150, "Nombre demasiado largo"),

    lastname: z.string("Campo debe de ser una cadena de texto")
        .min(2, "Apellido demasiado corto")
        .min(100, "Apellido demasiado largo"),

    secondLastname: z.string("Campo debe de ser una cadena de texto")
        .min(2, "Apellido demasiado corto")
        .min(100, "Apellido demasiado largo"),
    
    age: z.number("Campo debe de ser un numero")
        .min(10, "Edad fuera de los parametros")
        .max(99, "Edad fuera del rango"),

    email: z.string("Campo debe de ser una cadena de texto")
        .email()
        .min(2, "Email demasiado corto")
        .max(255, "Email demasiado largo"),

    password: z.string()
        .min(2, "Contraseña debe de comtener al menos 2 caracteres")
        .max(255, "Contraseña demasiada larga"),

    cp: z.string("Campo debe de ser una cadena de texto")
        .min(5, "Codigo postal demasiado corto")
        .max(5, "Codigo postal demasiado largo"),

    state: z.string("Campo debe de ser una cadena de texto")
        .min(2, "Estado demasiado corto")
        .max(255, "Estado demasiado largo"),

    area: z.string("Campo debe de ser una cadena de texto")
        .min(2, "Colonia demasiado corto")
        .max(255, "Colonia demasiado largo"),

    profession: z.string("Campo debe de ser una cadena de texto")
        .min(2, "Profesión demasiado corta")
        .max(255, "Profesión demasiado larga")
        .optional(),

    role: z.enum(["USER", "ADMIN"])
        .optional()
})

export const partialUserSchema = userSchema.partial()