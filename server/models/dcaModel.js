const mongoose = require('mongoose');


const dcaSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Enalbed', 'Disabled'],
    default: 'Enalbed'
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

const DCA = mongoose.model('dca', dcaSchema);

module.exports = DCA;