const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
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
    enum: ['Manager'],
    required: true,
    default: 'Manager'
  }
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
