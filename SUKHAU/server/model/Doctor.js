const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  address: { type: String },
  img: { type: String },
  phone: { type: String },
  gender: { type: String },
  dob: { type: String },
  biography: { type: String },
  clinicName: { type: String },
  clinicAddress: { type: String },
  clinicImages: [{ type: String }],
  
  city: { type: String },
  state: { type: String },
  country: { type: String },
  postalCode: { type: String },
  price: { type: String },
  services: { type: String },
  specialization: { type: String },
  degree: { type: String },
  college: { type: String },
  completionYear: { type: String },
  experience: { type: String },
  designation: { type: String },
  award: { type: String },
  awardYear: { type: String },
  registration: { type: String },
  year: { type: String },
  experienceHospitalName: { type: String },
  expericenceStart: { type: String },
  expericenceEnd: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointments' }],
  prescription: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' }],
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favourites' }],
  doctorTimeSlots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DoctorTimeSlot' }],
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blogs' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }]
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
