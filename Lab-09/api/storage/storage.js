import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';
import multer from 'multer';
import {DB_CONNECTION_STRING} from '../utils/constants.js'

const storage = new GridFsStorage({
    url: `${DB_CONNECTION_STRING}/test`,
    file: (req, file) => {
        if (!file) {
            console.log('no file')
            throw new Error('No file provided');
          }
          console.log(' file: ', file)

      return {
        filename: file.originalname,
        bucketName: 'uploads'
      };
    }
  });
  
export const upload = multer({ storage,   limits: { fileSize: 10 * 1024 * 1024 },  // Set max file size (10MB in this example)
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type'), false);
      }
    } });

let gfs;

mongoose.connection.once('open', () => {
  // Create GridFSBucket once MongoDB connection is established

  gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
  console.log('GridFSBucket initialized');
});

// Export gfs for use in other files
export { gfs };