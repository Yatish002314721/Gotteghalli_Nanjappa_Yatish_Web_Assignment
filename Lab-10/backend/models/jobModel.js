const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    jobSalary:{
        type:String,
        required:true
    },

    jobRequirements:{
        type:String,
        required:true
    },
    linkToApply:{
        type:String,
        required:true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Job', jobSchema)