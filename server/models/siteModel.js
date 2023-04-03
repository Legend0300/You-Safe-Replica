const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  managerInformation: {
    fullName: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Enabled', 'Disabled'],
      default: 'Enabled'
    }
  }
});

module.exports = mongoose.model('Site', siteSchema);
