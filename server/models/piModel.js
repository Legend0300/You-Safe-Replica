const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
  questionHeading: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  }
});

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
  questions: [questionSchema]
});

const PI = mongoose.model('PI', piSchema);

module.exports = PI;