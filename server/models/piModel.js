const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  Heading: {
    type: String,
    required: true
  },
  Question: {
    type: String,
    required: true
  }
});

const piSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true
  },
  type : {
    type: String,
    enum: ['PI'],
    default: 'PI',
    required: true
  },
  status: {
    type: String,
    enum: ['Enabled', 'Disabled'],
    default: 'Enabled'
  },
  questions: [questionSchema]
});

const PI = mongoose.model('PI', piSchema);

module.exports = PI;