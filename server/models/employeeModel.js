const mongoose = require('mongoose');

const employeeModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true
  },
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true
  },
  status: {
    type: String,
    enum: ['Enabled', 'Disabled'],
    default: 'Enabled'
  }
});

const Employee = mongoose.model('Employee', employeeModel);

module.exports = Employee;
