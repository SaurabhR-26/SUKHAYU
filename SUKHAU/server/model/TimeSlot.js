const mongoose = require('mongoose');

// Define the Schema for ScheduleDay
const scheduleDaySchema = new mongoose.Schema({
    startTime: String,
    endTime: String,
});

// Define the Schema for DoctorTimeSlot
const doctorTimeSlotSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required:true
    },
    day: {
        type: String,
       
    },
    timeSlot: [scheduleDaySchema], // Embedding ScheduleDay schema as an array
    weekDay: String,
    maximumPatient: Number,
}, { timestamps: true });

// Create models from the schemas
const ScheduleDay = mongoose.model('ScheduleDay', scheduleDaySchema);
const DoctorTimeSlot = mongoose.model('DoctorTimeSlot', doctorTimeSlotSchema);

module.exports = { DoctorTimeSlot, ScheduleDay };
