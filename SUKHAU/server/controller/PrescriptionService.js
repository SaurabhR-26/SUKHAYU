const httpStatus = require('http-status');
const ApiError = require('../Error/ApiError');
const Prescription = require('../model/Prescription');
const Doctor = require('../model/Doctor');
const Patient = require('../model/Patient');
const Appointment = require('../model/Appoinments');
const Medicine = require('../model/Medicine');
const bcrypt = require('bcrypt');

const createPrescription = async (user, payload) => {
    try {
        const { userId } = user;
        const isDoctor = await Doctor.findById(userId);
        console.log("this is " + isDoctor)
        if (!isDoctor) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
        }

        const isPatient = await Patient.findById(payload.patient);
        console.log("this is " + isPatient)
        if (!isPatient) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
        }

        const isAppointment = await Appointment.findById(payload.appointment);
        console.log("this is " + isDoctor)
        if (!isAppointment) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Appointment is not found !!');
        }

        payload.doctor = isDoctor.id;
        console.log("this is " + payload.doctor)
        const session = await Prescription.startSession();
        session.startTransaction();

        await Appointment.findByIdAndUpdate(isAppointment.id, { status: 'complete', followUp: payload.followUpDate });

        const medicines = payload.medicines;
        const prescription = await Prescription.create({ ...payload, medicines: undefined });
        const medicinePromises = [];
        for (const medicine of payload.medicines) {
            medicine.prescriptionId = prescription.id;
            medicinePromises.push(Medicine.create(medicine));
        }
        await Promise.all(medicinePromises);

        await session.commitTransaction();
        session.endSession();
        return { message: "Successfully Prescription Created" };
    } catch (error) {
        console.error("Error in createPrescription:", error);
        throw new ApiError(httpStatus.BAD_REQUEST, error.message || "An error occurred while creating prescription");
    }
};


const getAllPrescriptions = async () => {
    const result = await Prescription.find();
    return result;
};

const getPrescriptionById = async (id) => {
    const result = await Prescription.findById(id).populate('medicines');
    return result;
};

const getPatientPrescriptionById = async (user) => {
    const { userId } = user;
    const isPatient = await Patient.findById(userId);
    if (!isPatient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
    }
    const result = await Prescription.find({ patient: userId })
    console.log("this issss .... " + result)
        // .populate({
        //     path: 'doctor',
        //     select: 'firstName lastName designation',
        // })
        // .populate({
        //     path: 'appointment',
        //     select: 'scheduleDate scheduleTime',
        // });
    return result;
};

const getDoctorPrescriptionById = async (user) => {
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }
    const result = await Prescription.find({ doctorId: userId })
        .populate('medicines')
        .populate('patient');
    return result;
};

const deletePrescription = async (id) => {
    const result = await Prescription.findByIdAndDelete(id);
    return result;
};

const updatePrescription = async (id, payload) => {
    const result = await Prescription.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

module.exports = {
    createPrescription,
    getDoctorPrescriptionById,
    updatePrescription,
    getPatientPrescriptionById,
    deletePrescription,
    getPrescriptionById,
    getAllPrescriptions,
};