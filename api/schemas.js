const zod = require('zod')

const adminSchema  = zod.object({
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string()
}) 

const userSchema = zod.object({
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string()
})

const realestateSchema = zod.object({
    propertyName : zod.string(),
    description : zod.string(),
    location : zod.string(),
    price : zod.number().default(0),
    predictedPrice : zod.number().default(0),
    bhk : zod.number(),
    bath : zod.number(),
    squareFoot : zod.number(),
    email : zod.email()
})

module.exports = {
    adminSchema, userSchema, realestateSchema
}