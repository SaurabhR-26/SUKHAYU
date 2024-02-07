const mongoose = require('mongoose');

// Define the schema for the Payment model
const paymentSchema = new mongoose.Schema({
    appointmentId: {
        type: String,
        required: true
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    DoctorFee: {
        type: Number,
        required: true
    },
    bookingFee: {
        type: Number,
        required: true
    },
    vat: Number,
    totalAmount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Create the Payment model using the schema
const Payment = mongoose.model('Payment', paymentSchema);

// Export the model
module.exports = Payment;
