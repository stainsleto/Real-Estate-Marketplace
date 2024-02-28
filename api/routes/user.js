const { Router } = require('express')
const jwt = require('jsonwebtoken')
const {User, RealEstate} = require('../db/index')
const userMiddleware = require('../middleware/user')
const {userSchema,realestateSchema} = require('../schemas')
const { JWT_SECRET } = require('../configs/config')


const router = Router()

router.post('/signup', async (req,res) => {

    const {username,email,password} =userSchema.parse(req.body)

    try{
        await User.create({
            username,
            email,
            password
        })

        res.status(200).json({
            "message" : "User created Successfully"
        })
    }
    catch(err){
        res.status(403).json({
            "message" : "User creation Failed"
        })
    }
})

router.post('/login', async (req,res) => {

    const {username, password} = req.body

    try{
       const isValidated =  await User.findOne({
            username,
            password
        })

        console.log(isValidated._id)

        if(isValidated){
            const token = jwt.sign({userId : isValidated._id, username}, JWT_SECRET)
            res.status(200).json({
                'token' : `Bearer ${token}`
            })
        }
    }
    catch(err){
        res.status(411).json({
            'message' : 'Incorrect User Credentials'
        })
    }

})

//adding a property

router.post('/addproperty', userMiddleware, async (req,res) => {
    const { title,description,city,price,imageLink,bedroom,bathroom,numberOfRooms,saleCondition,parking,dateBuild,buildType,squareFeet} = realestateSchema.parse(req.body)
    const userId = req.user.userId    //provides the user details of the logged-in user 
    try{
        const newProperty = await RealEstate.create({
            title,
            description,
            city,
            price,
            imageLink,
            bedroom,
            bathroom,
            numberOfRooms,
            saleCondition,
            parking,
            dateBuild,
            buildType,
            squareFeet
        })

        // await User.findByIdAndUpdate(userId,{
        //     $push: {publishedRealEstate: newProperty._id}      
        // })

        // res.status(200).json({
        //     message : 'Property Created',
        //     properyId : newProperty._id           
        // })

        const user = await User.findById(userId);

        if (user) {
            user.publishedRealEstate.push(newProperty._id);
            await user.save();
            res.status(200).json({
                message: 'Property Created',
                propertyId: newProperty._id
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
}

    }
    catch(err){
        res.status(403).json({
            message : `Error in Propert Listing ${err}`
        })
    }
})



// looking out the properties after login s

router.get('/property',userMiddleware, async (req,res) =>{
    try{

        const all  = await RealEstate.find()
        res.status(200).json({
            response : all
        })
    }
    catch(err){
        res.status(404).json({
            "message" : `Error Catched : ${err} `
        })
    }
})


//editing a property -- under dev

router.post('/property/:propertyId', userMiddleware, async (req,res) =>{
    const propertyId = req.params.propertyId;
    const userId = req.user.userId;
    const username = req.user.username
    await RealEstate.updateOne( {
        username,
        userId
    }, {
        $push : {

        }
    })
})


module.exports = router
