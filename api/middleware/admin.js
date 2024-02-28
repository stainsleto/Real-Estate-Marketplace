const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../configs/config')


 async function adminMiddleware (req, res, next){
    try{


    const token = await req.headers.authorization
    const jwtToken = token.split(' ')
    const decodedValue = jwt.verify(jwtToken[1], JWT_SECRET);



    if(decodedValue.username){
        next()
    }
    else{
        res.status(403).json({
            'message' : 'You are not authorized'
        })
    }
}

catch(err){
    console.log('JWT Verification Error', err)
    res.status(403).json({
        message : 'Invalid Token'
    })
}

}


module.exports = adminMiddleware