const mongoose = require('mongoose');

const areaModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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
const Area = mongoose.model('Area', areaModel);
module.exports = Area;
