import joi from 'joi'

export const nameSchema = joi.object({
    name: joi.string().required()
} )