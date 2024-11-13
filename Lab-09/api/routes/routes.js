import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import User from '../models/models.js';  // Assuming models.js file extension
import jwt from 'jsonwebtoken';
import { upload, gfs  } from '../storage/storage.js';
import { GridFSBucket } from 'mongodb';
import {DB_CONNECTION_STRING} from '../utils/constants.js'
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded())
router.use(cors())


router.post('/create', async (req, res) => {
    const { fullName, email, password } = req.body;
  
    if (!fullName || !email || !password) {
      return res.status(400).send('Missing required fields in the request body');
    }
  
    if (!email || typeof email !== 'string' || !email.match(/^[a-zA-Z0-9._-]+@northeastern\.edu$/)) {
      return res.status(400).send('Invalid emailid - Please use your northeastern email');
    }
  
    if (password.length < 8) {
      return res.status(400).send('Password must be at least 8 characters long');
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({ fullName, email, password: hashedPassword, salt });
      await user.save();
      res.send(`User ${user.email} created successfully`);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Internal Server Error - Error creating user - Check Email Id, User might already exist');
    }
  });
  
router.put('/edit', async (req, res) => {
    const { email, fullName, password } = req.body;
    if (!fullName && !password) {
      return res.status(400).send('Please enter data to update!');
    }
  
    if (!email || typeof email !== 'string') {
      return res.status(400).send('Invalid email ');
    }
  
    if (fullName && typeof fullName !== 'string') {
      return res.status(400).send('Invalid name');
    }
  
    if (password && (typeof password !== 'string' || password.length < 8)) {
      return res.status(400).send('Invalid password. Password must be at least 8 characters long');
    }
  
    try {
  
      const user = await User.findOne({ email });
  
    
      if (!user) {
        return res.status(404).send(' User not found');
      }
  
  
      if (fullName) {
        user.fullName = fullName;
      }
  
      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }
  
  
      await user.save();
  
      res.send(`User ${user.fullName} details updated successfully`);
    } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).send('Error in updating user details');
    }
  });
  
router.delete('/delete', async (req, res) => {
    const { email } = req.body;
  
    if (!email || typeof email !== 'string') {
      return res.status(400).send('Invalid email format');
    }
  
    try {
      const deletedUser = await User.findOneAndDelete({ email });
  
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
  
      res.send('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error in deleting user');
    }
  });
  
  router.get('/getAll', async (req, res) => {
    try {
      const users = await User.find({}, 'fullName email password salt');
      res.json(users);
    } catch (error) {
      console.error('Error in getting all users:', error);
      res.status(500).send('Error in getting All users');
    }
  });

  router.post('/image/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    console.log(req.file)
    res.status(200).json({
      message: 'File uploaded successfully!',
      file: req.file,
    });
  });

  router.get('/images', async (req, res) => {
  
    try {
      // Prepare an array to hold the result for all requested files (including duplicates)
      const imageResults = [];

        // Access the test.files collection to get file metadata
        const db = mongoose.connection.db;
        const filesCollection = db.collection('uploads.files');
        const chunksCollection = db.collection('uploads.chunks');
  
        // Find all files matching the filename
        const filesCursor = filesCollection.find();
  
        // Convert the cursor to an array of files (since we are not using .limit() or other query constraints)
        const files = await filesCursor.toArray();
  
        if (files.length === 0) {
          // If no files are found for the given filename, log the error and continue
          imageResults.push({
            filename,
            error: 'File not found'
          });
        }
  
        // Loop through all files with the same filename
        for (let file of files) {
          // Retrieve the chunks of the file from the test.chunks collection
          const chunks = await chunksCollection
            .find({ files_id: file._id })
            .sort({ n: 1 })
            .toArray();
  
          if (!chunks || chunks.length === 0) {
            imageResults.push({
              filename,
              error: 'No chunks found for the file'
            });
            continue;
          }
  
          // Combine the chunks into a single binary buffer
          const fileBuffer = Buffer.concat(chunks.map(chunk => chunk.data.buffer));
  
          // Store the image with its buffer and metadata
          imageResults.push({
            contentType: file.contentType,
            data: fileBuffer.toString('base64'), // Store buffer as base64-encoded string for response
          });
        }

  
      // Send back all image buffers in the response (including duplicates)
      res.status(200).json(imageResults);
  
    } catch (err) {
      console.error('Error fetching images:', err);
      res.status(500).json({ message: 'Error fetching images', error: err.message });
    }
  });
  
  

  // router.get('/images', async (req, res) => {
  //   console.log('in images')
  //   const client = mongoose.connection.getClient();
  //   const db = client.db('test');
  //   const file = 'pic.jpeg';  // File name you're fetching from GridFS
  //   const collection = db.collection('uploads.files');
  //   const collectionChunks = db.collection('uploads.chunks');
  
  //   collection.find({ filename: file }).toArray(function(err, docs) {
  //     console.log('found')
  //     if (err) {
  //       return res.status(500).json({
  //         message: 'Error finding file',
  //         error: err.message,
  //       });
  //     }
  
  //     if (!docs || docs.length === 0) {
  //       return res.status(404).json({
  //         message: 'No file found',
  //       });
  //     }
  
  //     // Retrieving the chunks from the db
  //     collectionChunks.find({ files_id: docs[0]._id }).sort({ n: 1 }).toArray(function(err, chunks) {
  //       if (err) {
  //         return res.status(500).json({
  //           message: 'Error retrieving chunks',
  //           error: err.message,
  //         });
  //       }
  
  //       if (!chunks || chunks.length === 0) {
  //         return res.status(404).json({
  //           message: 'No chunks found',
  //         });
  //       }
  
  //       let fileData = [];
  //       for (let i = 0; i < chunks.length; i++) {
  //         // Convert chunk data to base64 string
  //         fileData.push(chunks[i].data.toString('base64'));
  //       }
  
  //       // Final file data in base64 format
  //       let finalFile = 'data:' + docs[0].contentType + ';base64,' + fileData.join('');
  
  //       // Send the base64 data as JSON response
  //       return res.status(200).json({
  //         message: 'Image loaded from MongoDB GridFS',
  //         imgurl: finalFile,  // This is the base64-encoded image
  //       });
  //     });
  //   });
  // });
  
  
  
  
  

  router.get("/",cors(),(req,res)=>{
console.log('Homepage')
  })
    

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

  


export default router;