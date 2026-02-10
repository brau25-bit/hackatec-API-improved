export function validateSchema(schema){
    return (req,res,next) => {
        const validated = schema.safeParse(req.body)
        
        if(!validated.success) return res.status(400).json({error: validated.error.flatten()})

        req.validated = validated.data

        next()
    }   
}