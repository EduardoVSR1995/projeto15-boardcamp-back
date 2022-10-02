import joi from 'joi'

export const nameSchema = joi.object({
    name: joi.string().min(1).invalid(" ",'').required()
} )

export const gameSchema = joi.object({
    name: joi.string().invalid(" ", '').required(),
    stockTotal: joi.number().min(1).required(),
    pricePerDay:joi.number().min(1).required(), 
    categoryId: joi.number() ,
    image:joi.string(),
})