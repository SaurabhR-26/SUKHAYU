const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
    instructions: String,
    isFullfilled: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false },
    daignosis: String,
    disease: String,
    bronchitis: String,
    medicines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointments' },
  });
  
  const Prescription = mongoose.model('Prescription', PrescriptionSchema);
  module.exports = { Prescription };