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

const dcaSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['DCA'],
    default: 'DCA',
    required: true
  },
  status: {
    type: String,
    enum: ['Enabled', 'Disabled'],
    default: 'Enabled'
  },
  questions: [questionSchema],
  endDate: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const DCA = mongoose.model('DCA', dcaSchema);

module.exports = DCA;