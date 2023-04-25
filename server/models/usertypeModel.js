const mongoose = require('mongoose');

const AccountTypeEnum = Object.freeze({
  EMPLOYEE: 'Employee',
  VISITOR: 'Visitor'
});

const UserAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'user',
    required: true
  },
  picture: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png',
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  accountType: {
    type: String,
    enum: [AccountTypeEnum.EMPLOYEE, AccountTypeEnum.VISITOR],
    required: true
  },
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});


const User = mongoose.model('User', UserAccountSchema);

module.exports = User;
