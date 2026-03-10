export function validateSchema(schema){
    return (req,res,next) => {
        const validated = schema.safeParse(req.body)
        
        if(!validated.success) return res.status(400).json({message: "Los datos no pudieron ser validados"})

        req.validated = validated.data

        next()
    }   
}