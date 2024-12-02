const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,'Full name is required'],
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail, 'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[8,'Password must be at least 8 characters long'],
        validate:{
            validator:(value)=>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value),
            message:'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        }
    },
    type:{
        type:String,
        required:[true,'Role is required'],
        enum:{values:['admin','employee'], message:'Role must be either admin or employee'},
        lowercase:true,
        trim:true
    },
    imagePath:{
        type:String
    }


},{timestamps:true})

userSchema.post('save', function(error, doc, next){
    if(error.name === 'MongoServerError' && error.code === 11000){
        next(new Error('The email address is already registed. Please use a different email'))
    }else{
        next(error)
    }
})

// hash password before saving user
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})

module.exports = mongoose.model('User', userSchema)