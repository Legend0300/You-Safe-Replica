const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    enum: ['Enalbed', 'Disabled'],
    default: 'Enalbed'
  } 
});

module.exports = mongoose.model('area', departmentSchema);
