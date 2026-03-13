import z from 'zod'

export const reportSchema = z.object({
    title: z.string()
        .min(2, "La longitud del titulo debe de ser menor a dos caracteres")
        .max(100, "La longitud del titulo debe de ser mayor a cien caracteres"),

    description: z.string()
        .min(2, "La longitud de la descripcion debe de ser menor a dos caracteres")
        .max(100, "La longitud de la descripcion debe de ser mayor a cien caracteres"),

    location: z.string()
        .min(2)
        .max(256),

    longitude: z.number()
        .min(-180)
        .max(180),

    latitude: z.number()
        .min(-90)
        .max(90),

    userId: z.string()
        .min(2)
})

export const partialReportSchema = reportSchema.partial()