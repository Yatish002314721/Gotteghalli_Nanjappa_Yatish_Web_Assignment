const Job = require('../models/jobModel')

exports.createJob = async (req, res) => {    
    const { company:companyName, title:jobTitle, description:jobDescription, salary:jobSalary, requirements:jobRequirements,applyLink:linkToApply } = req.body;
    
    if (!companyName || !jobTitle || !jobDescription || !jobSalary || !jobRequirements || !linkToApply) {
        return res.status(200).json({ success: false, message: "All fields are required." });
    }
    try {
        const newJob = new Job({
            companyName,
            jobTitle,
            jobDescription,
            jobSalary,
            jobRequirements,
            linkToApply
        });

        await newJob.save();
        res.status(201).json({ success: true, message: "Job created successfully!", job: newJob });
    } catch (error) {
        res.status(200).json({ success: false, message: error.message });
    }
};


exports.getAllJobs = async (req, res) => {
    try{
        const jobs = await Job.find()
        res.status(200).json({success:true, message:'Jobs fetched successfully', jobs:jobs})
    }catch(error){
        res.status(200).json({success:false, message:error.message, jobs:[]})
    }
}

exports.deleteAllJob = async (req, res) => {
    try{
        await Job.deleteMany()
        res.status(200).json({success:true, message:'All jobs deleted successfully'})
    }catch(error){
        res.status(200).json({success:false, message:error.message})
    }
}



