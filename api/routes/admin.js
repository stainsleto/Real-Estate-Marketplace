const { Router } = require('express')
const jwt = require('jsonwebtoken');
const adminMiddleware = require('../middleware/admin')
const {Admin} = require('../db/index')
const {adminSchema} = require('../schemas')

const { JWT_SECRET } = require('../configs/config')


const router = Router()



router.post('/signup', async (req,res) => {

    const {username,email, password} = adminSchema.parse(req.body)

    try{
        await Admin.create({
            username,
            email,
            password
        })
        res.status(200).json({
            "message" : "Admin account created"
        })

    }
    catch(err){
        res.status(403).json({
            "message" : "Admin account creation failed"
        })
    }
})

router.post('/login', async(req,res) => {
    const {username, password} = req.body;
    
    const isValidated = await Admin.find({
        username,
        password
    })

    if(isValidated){
        const token = jwt.sign({username}, JWT_SECRET)

        res.status(200).json({
            'token' : `Bearer ${token}`
        })
    }
    else{
        res.status(411).json({
            'message' : 'Incorrect Username and Password'
        })
    }

})

router.get('/dashboard', adminMiddleware , async(req,res) => {
    
    try{

    res.status(200).json({
        "message" : "Dashboard"
    })

    }

    catch (err){
        res.status(403).json({
            "message" : "Admin not logged in"
        })

    }

})

module.exports = router