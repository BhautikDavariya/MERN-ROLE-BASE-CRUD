"use strict";
var mongoose = require("mongoose");
// const validator = require("validator");
// var pass;
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
// var passwordvalid = function (pass) {
//   var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
//   return re.test(pass)
// };

var UserSchema = new mongoose.Schema({
    frist_name: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,

  },
  last_name: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: false,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    // validate: [passwordvalid, 'Please fill a strog password'],
    trim: true,
  },
  confirm_password: {
    type: String,
    required: true,
    trim: true,
  },
  roles: {
    type: Array,
    default: ['user'],
}
}, {
  timestamps: true,
});

var user = mongoose.model("user", UserSchema);
module.exports = user;