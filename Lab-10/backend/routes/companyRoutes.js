const express = require('express');
const Company = require('../models/companyModel');
const router = express.Router();

// get all companies with their images
router.get('/', async (req, res) => {
    try {
        // const companies = await Company.find();
        const companies = [{_id:1, name: "amazon", imagePath: "amazon.png"},
            {_id:2, name: "apple", imagePath: "apple.png"},
            {_id:3, name: "google", imagePath: "google.png"},
            {_id:4, name: "microsoft", imagePath: "microsoft.png"},                       
            ]; 
        res.json(companies); // return an array of companies
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;