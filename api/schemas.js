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
    title : zod.string(),
    description : zod.string(),
    city : zod.string(),
    price : zod.number(),
    imageLink : zod.string(),
    bedroom : zod.number(),
    bathroom : zod.number(),
    numberOfRooms : zod.number(),
    saleCondition : zod.string(),
    parking : zod.boolean(),
    dateBuild : zod.string(),
    buildType : zod.string(),
    squareFeet : zod.number()
})

module.exports = {
    adminSchema, userSchema, realestateSchema
}