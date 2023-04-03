const mongoose = require('mongoose');

const areaManagerModel = new mongoose.Schema({
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

const AreaManager = mongoose.model('AreaManager', areaManagerModel);

module.exports = AreaManager;
