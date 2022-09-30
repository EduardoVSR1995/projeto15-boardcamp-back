import { nameSchema } from "../suports/schemas.js";

export default function(req, res, next){
    
    const validation = nameSchema.validate(req.body, {abortEarly: false});
    
    if (validation.error) {
    
        const error = validation.error.details.map(details => details.message);
    
        return res.status(400).send(error);
    };

    next();

}