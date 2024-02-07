const mongoose = require('mongoose');

// Define the schema for the Appointments model
const appointmentsSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    description: String,
    scheduleDate: String,
    scheduleTime: String,
    reasonForVisit: String,
    status: String,
    patientType: {
        type: String,
        enum: ['normal', 'emergency'],
        default: 'normal'
    },
    followUp: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    prescription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription'
    }],
    payment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    }]
}, { timestamps: true });

// Create the Appointments model using the schema
const Appointments = mongoose.model('Appointments', appointmentsSchema);

// Export the model
module.exports = Appointments;
