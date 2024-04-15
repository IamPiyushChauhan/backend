const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  creatorEmail: {
    type: String,
    required: true
  }
});

const model = mongoose.model('Profile', ProfileSchema);

module.exports = model;
