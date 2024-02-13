const mongoose = require('mongoose');

const { Schema } = mongoose;

const MadicalHistorySchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    appointmentDate: {
        type: String,
    },
    patientCondition: {
        type: String,
    },
    describeProblem: {
        type: String,
    },
    diagnosis: {
        type: String,
    },
    disease: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
});

const MadicalHistoryModel = mongoose.model('madicalHistory', MadicalHistorySchema);

module.exports = { MadicalHistoryModel };
