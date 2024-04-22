const { Router } = require('express')
const jwt = require('jsonwebtoken')
// const  multer = require('multer')
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
                'token' : `Bearer ${token}`,
                'email' : isValidated.email
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


router.post('/addproperty', userMiddleware,async (req,res) => {
    const { propertyName,description,location,price,predictedPrice,squareFoot,bhk,bath, email} = realestateSchema.parse(req.body)
    const userId = req.user.userId    //provides the user details of the logged-in user 
    try{
        const newProperty = await RealEstate.create({
            propertyName,
            description,
            location,
            price,
            predictedPrice,
            squareFoot,
            bhk,
            bath,
            email
        })

        

        //uploading the image
        
        
        // upload.single('propertyImage') 

        // const storage = multer.diskStorage({
        //     destination: function (req, file, cb) {
        //       cb(null, './uploads')
        //     },
        //     filename: function (req, file, cb) {
            
        //       cb(null, newProperty._id)
        //     }
        //   })
          
        //   const upload = multer({ storage })

        //   const property = await RealEstate.findById(newProperty._id)
        //   if(property){
        //     property.imageLink = `http://girei.tech/uploads/${newProperty._id}`
        //   }
        //   else{
        //     res.status(404).json({
        //         message : 'Property not found'
        //     })
        //   }

          //updating the image link done 

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



// looking out the properties =

router.get('/property', async (req,res) =>{
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

//viewing a single property

router.get('/property/:propertyId', async (req,res) => {
    const propertyId = req.params.propertyId
    try{
        const property = await RealEstate.findById(propertyId)
        res.status(200).json({
            response : property
        })
    }
    catch(err){
        res.status(404).json({
            message : `Error in fetching the property ${err}`
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
