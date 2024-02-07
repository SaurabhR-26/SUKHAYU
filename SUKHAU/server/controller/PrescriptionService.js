const httpStatus = require('http-status');
const ApiError = require('../Error/ApiError');
const Prescription = require('../model/Prescription');
const Doctor = require('../model/Doctor');
const Patient = require('../model/Patient');
const Appointment = require('../model/Appoinments');
const Medicine = require('../model/Medicine');
const bcrypt = require('bcrypt');

const createPrescription = async (user, payload) => {
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }

    const isPatient = await Patient.findById(payload.patientId);
    if (!isPatient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
    }

    const isAppointment = await Appointment.findById(payload.appointmentId);
    if (!isAppointment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Appointment is not found !!');
    }

    payload.doctorId = isDoctor.id;

    const session = await Prescription.startSession();
    session.startTransaction();
    try {
        await Appointment.findByIdAndUpdate(isAppointment.id, { status: 'complete', followUp: payload.followUpDate });

        const medicines = payload.medicines;
        const prescription = await Prescription.create({ ...payload, medicines: undefined });

        const medicinePromise = medicines.map((medicine) =>
            Medicine.create({ ...medicine, prescriptionId: prescription.id })
        );
        await Promise.all(medicinePromise);

        await session.commitTransaction();
        session.endSession();
        return { message: "Successfully Prescription Created" };
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw new ApiError(httpStatus.BAD_REQUEST, error.message);
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
    const result = await Prescription.find({ patientId: userId })
        .populate({
            path: 'doctor',
            select: 'firstName lastName designation',
        })
        .populate({
            path: 'appointment',
            select: 'scheduleDate scheduleTime',
        });
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