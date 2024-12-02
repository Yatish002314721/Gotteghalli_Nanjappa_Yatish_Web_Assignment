// backend/server.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))// parse url-encoded bodies(from data)
app.use(express.json())// parse JSON requests

app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const jobRoutes = require('./routes/jobRoutes');
app.use('/job', jobRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

const companyRoutes = require('./routes/companyRoutes');
app.use('/companies', companyRoutes);

const PORT =  3100;

app.use('/static', express.static('public'))

app.use('/files', express.static('images'))

app.use('/company_images', express.static('images'))

// MongoDB connection
const MONGODB_URL = 'mongodb+srv://yatishgn504:COddA7VNgtrh2pxh@cluster0.8ewbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGODB_URL,{})
        .then(() => console.log('MongoDB connected successfully!'))
        .catch(err => console.log(err))

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})

module.exports = app