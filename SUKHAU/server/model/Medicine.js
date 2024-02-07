const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  quantity: Number,
  dosage: String,
  frequency: String,
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  prescription: { type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' },
});

const Medicine = mongoose.model('Medicine', MedicineSchema);

module.exports = Medicine;
