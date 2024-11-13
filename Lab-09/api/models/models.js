import {mongoose} from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._-]+@northeastern\.edu$/, },
    password: { type: String, required: true },
    salt: { type: String, required: true },
  });
  
  
  const User = mongoose.model('webds', userSchema);

  export default User;