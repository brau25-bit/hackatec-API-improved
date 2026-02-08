export function validateSchema(schema){
    return (req,res,next) => {
        const validated = schema.safeParse(req.body)

        if(!validated) return res.json({error: error.message.flatten()})

        req.validated = validated.data

        next()
    }   
}