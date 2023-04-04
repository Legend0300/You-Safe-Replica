const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Admin'],
    required: true,
    default: 'Admin'
  }
});

const Admin = mongoose.model('Manager', adminSchema);

module.exports = Admin;
