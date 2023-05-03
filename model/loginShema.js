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

var loginSchema = new mongoose.Schema({
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
  }
}, {
  timestamps: true,
});

var login = mongoose.model("login", loginSchema);
module.exports = login;