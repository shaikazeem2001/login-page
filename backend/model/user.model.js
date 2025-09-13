
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "username must be 3 characters long"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [13, "email must be 13 characters long"],
  },
  password: {
    type: String,
    required: true,
    
    minlength: [5, "password must be 5 characters long"],
  },
});


const user=mongoose.model('user',userschema);
module.exports=user;