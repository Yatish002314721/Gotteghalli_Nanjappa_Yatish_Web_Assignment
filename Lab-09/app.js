import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import routes from './api/routes/routes.js'; // assuming you have a .js extension
import Grid from 'gridfs-stream';
import { GridFsStorage } from 'multer-gridfs-storage';
import {DB_CONNECTION_STRING} from './api/utils/constants.js'
const port = 3001;

const app = express();
mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true,ssl: true})
/*mongoose.connect('mongodb://localhost:27017/WedD', { useNewUrlParser: true, useUnifiedTopology: true });*/

app.use(express.json());

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ error: 'Invalid JSON given' });
  }
  next();
});
app.use(routes);

app.use(cors("*"));

app.use((err, req, res, next) => {
  console.error(err);
  if (err instanceof multer.MulterError) {
    return res.status(500).send('Multer error: ' + err.message);
  }
  res.status(500).send('Server error: ' + err.message);
});

app.get('/', cors(),(req, res)=>{res.send('Hello from the homepage');});


app.listen(port, () => {
  const localurl = `http://localhost:${port}`;
  console.log(`Server is definately running on port ${localurl}`);
});
