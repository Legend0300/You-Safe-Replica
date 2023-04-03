const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  department: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Enalbed', 'Disabled'],
    default: 'Enalbed'
  }
});

module.exports = mongoose.model('department', departmentSchema);
