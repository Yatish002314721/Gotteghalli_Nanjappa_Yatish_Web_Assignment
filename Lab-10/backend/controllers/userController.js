const bcrypt = require('bcrypt')
const User = require('../models/userModel')

//validation
const regExpFullName = /^[A-Za-z]+(?: [A-Za-z]+)+$/
const regExpPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}/

const validateFullName = (fullName)=>{
    return regExpFullName.test(fullName)
}

const validatePassword = (password)=>{
    return regExpPassword.test(password)
}

exports.createUser = async (req, res)=>{
    try{       
        const {fullName, email, password, type} = req.body

        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(200).json({
                success:false,
                message:`User with ${email} already exists`
            })
        }

        if(!validateFullName(fullName)){
            return res.status(200).json({
                success:false,
                message:'Full name must contain only letters and at least one space.'
            })
        }

        if(!validatePassword){
            return res.status(200).json({
                success:false,
                message:'Password must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers '
            })
        }

        if (!type) {
            return res.status(200).json({
                success:false,
                message:'Role is required'
            })
        }

        const user = new User({fullName, email, password, type})
        await user.save()
        res.status(200).json({
            success:true,
            message:'User created successfully'
        })

    }catch(error){
        res.status(200).json({error:error.message})
    }
}

exports.updateUser = async(req, res)=>{
    try{        
        const {fullName, email, password} = req.body

        if(!email){
            return res.status(200).json({message:'email is required for updating'})
        }
        const user = await User.findOne({email})

        //user not exists
        if(!user){
            return res.status(200).json({message:`User with ${email} not found`})
        }

        //full name validation
        if(fullName){
            if(!validateFullName(fullName)){
                return res.status(200).json({
                    message:'Full name must contain only letters and at least one space'
                })
            }
            user.fullName = fullName
        }

        //password validation
        if(password){
            if(!validatePassword(password)){
                return res.status(200).json({
                    message:'Password must be at least 8 characters long and include uppercase letter, lowercase letter, and number'
                })
            }
        }

        await user.save()
        res.json({message:'User updated successfully'})

    }catch(error){
        res.status(200).json({error:error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try{
        
        const {email} = req.body
        const user = await User.findOne({email})

        if(!user) return res.status(200).json({message:'User not found'})
        
        await user.deleteOne();
        res.json({message:'User deleted successfully'})

    }catch(error){
        res.status(200).json({error:error.message})
    }
}

exports.getUser = async (req, res) => {
    try{
        const {email} = req.body
        const user = await User.findOne({email})

        if(!user) return res.status(200).json({message:'User not found'})
        res.json(user)
    
    }catch(error){
        res.status(200).json({error:error.message})
    }
}

exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find().select('-password')
        res.json(users)

    }catch(error){
        res.status(200).json({error:error.message})
    }
}