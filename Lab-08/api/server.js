const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
const routes = require('./routes/Routes.js');
const db = 'mongodb+srv://yatishgn504:COddA7VNgtrh2pxh@cluster0.8ewbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

/*mongoose.connect('mongodb://localhost:27017/Lab8', { useNewUrlParser: true, useUnifiedTopology: true });*/
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,ssl: true})
  /*.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed to database");
  });*/


app.get('/', (req, res)=>{res.send('Hello from the homepage');});


app.use(express.json());


app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ error: 'Invalid JSON given' });
  }
  next();
});
app.use(routes);



app.listen(port, () => {
  const localurl = `http://localhost:${port}`;
  console.log(`Server is definately running on port ${localurl}`);
});
