const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    description: String,
    star: String,
    isRecommended: Boolean,
    response: String,
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
