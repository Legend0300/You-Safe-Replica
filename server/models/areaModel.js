const mongoose = require('mongoose');

const areaModel = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Department',
    required: true
  },
  status: {
    type: String,
    enum: ['Enabled', 'Disabled'],
    default: 'Enabled'
  } 
});

module.exports = mongoose.model('Area', areaModel);
