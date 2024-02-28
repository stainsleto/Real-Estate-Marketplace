const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../configs/config')


async function userMiddleware(req, res, next) {

    try{
        const token = req.headers.authorization
        const newToken  = token.split(" ");
        const jwtToken = newToken[1]
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

        if(decodedValue.username){
            req.user = {
                userId : decodedValue.userId,
                username : decodedValue.username
            }

            console.log(req.user)
            next()
        }
        else{
            res.status(403).json({
                'message' : 'You are not authorized'
            })
        }

    }

    catch(err){
        res.status(403).json({
            message : `Invalid Token`
        })
    }
}


module.exports = userMiddleware
