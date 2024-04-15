const userModel = require('../model/User')
const validateToken = require('./validateToken')


async function addDataMiddleware(req,res,next) {
    
    const {token} = req.body;
    const validatedResult = validateToken(token);
    console.log(validatedResult);
    let result = await userModel.findById(validatedResult.id)
   
    if(result.useremail !== undefined ){
     next()
    }else {
        res.status(401).json({'error': 'invalid token'})
    }
}



module.exports = {addDataMiddleware}