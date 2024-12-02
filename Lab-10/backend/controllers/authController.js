// backend/controllers/authController.js
const {authenticateUser} = require('../services/authService')
const jwt = require('jsonwebtoken')

// Secret key for signing JWT - json web token
// used for authentication
const JWT_SECRET = '147893256qwertyuioplkjhgfdsazxcvb'

exports.login = async(req, res)=>{
    const {username, password} = req.body

    try{
        const auth = await authenticateUser(username,password)

        if(auth.success){
            const token = jwt.sign({username:auth.user.username}, JWT_SECRET,{expiresIn:'1h'})
            res.json({success:true, message:auth.message, token, user:auth.user})
            
        }else{
            res.status(200).json({success:false, message:auth.message, user:auth.user})
        }
    }catch(error){
        res.status(200).json({success:false, message:'Internal server error while logging in.', user:null})
    }
}