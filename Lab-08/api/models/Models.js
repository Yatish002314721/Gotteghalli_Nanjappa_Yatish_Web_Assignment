const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._-]+@northeastern\.edu$/, },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    imagePath: { type: String },
  });
  
  
  const User = mongoose.model('WebD', userSchema);

  module.exports = User;