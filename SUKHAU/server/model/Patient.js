const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  bloodGroup: String,
  mobile: String,
  city: String,
  state: String,
  zipCode: String,
  gender: String,
  country: String,
  email: { type: String, unique: true },
  address: String,
  img: String,
  createdAt: Date,
  updatedAt: Date,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointments' }],
  Reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }],
  Prescription: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' }],
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favourites' }],
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;

