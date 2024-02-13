
const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password:{
    type:String,
    required:true,
 },

  role: {type:String,
    required:true},
    userId:{
      type:mongoose.Types.ObjectId,
      required:true
    }
}
);

const Auth = mongoose.model('Auth', AuthSchema);

module.exports = Auth;
