const mongoose = require('mongoose')
require('dotenv').config()

const mongoUrl  = process.env.MONGO_KEY

mongoose.connect(mongoUrl);


const AdminSchema = new mongoose.Schema({
    username : String,
    email:String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    password: String,
    publishedRealEstate:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'RealEstate'
    }]
})




const realEstateSchema =  new mongoose.Schema({
    title : String,
    description : String,
    city : String,
    price : Number,
    imageLink : String,
    bedroom : Number,
    bathroom : Number,
    numberOfRooms : Number,
    saleCondition : String,
    parking : Boolean,
    dateBuild : String,
    buildType : String,
    squareFeet : Number
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const RealEstate = mongoose.model('RealEstate',realEstateSchema)


module.exports = {
    Admin,
    User,
    RealEstate
}