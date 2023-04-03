const mongoose = require('mongoose');


const piSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Enabled', 'Disabled'],
    default: 'Enabled'
  },
  questionHeading: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  }
});

const PI = mongoose.model('PI', piSchema);

module.exports = PI;