const mongoose = require('mongoose');
const moment = require('moment');
const httpStatus = require('http-status');
const ApiError = require('../Error/ApiError');
// const Appoinments=require('../model/')// Assuming you have defined the schemas for Appointments, Patient, and Paymen
// CreateAppointment function
const Appointments=require("../model/Appoinments");
const Doctor=require("../model/Doctor");
const Patient=require("../model/Patient");
const Payment=require("../model/Payment")
async function createAppointment(user, payload) {
    console.log(payload);
    const { patientInfo, Payment} = payload;
    const isUserExist = await Patient.findById(user.userId);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
    }
console.log(`{patientInfo}`);
console.log(patientInfo);
    const isDoctorExist = await Doctor.findById(patientInfo.doctorId);
    if (!isDoctorExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }
    console.log(` is patient exist${isDoctorExist}`);
    if (isUserExist) {
        patientInfo.patientId = isUserExist.id;
        patientInfo.status = 'pending';
    }

    const appointment = new Appointments(patientInfo);
    const savedAppointment = await appointment.save();

    // const { paymentMethod, paymentType } = payment;
    // const docFee = Number(isDoctorExist.price);
    // const vat = (15 / 100) * (docFee + 10);
    // const paymentData = {
    //     appointmentId: savedAppointment.id,
    //     bookingFee: 10,
    //     paymentMethod: paymentMethod,
    //     paymentType: paymentType,
    //     vat: vat,
    //     DoctorFee: docFee,
    //     totalAmount: (vat + docFee)
    // };
    // const paymentRecord = new Payment(paymentData);
    // await paymentRecord.save();

    return savedAppointment;
}

// GetAllAppointments function
async function getAllAppointments() {
    return await Appointments.find();
}

// GetAppointment function
async function getAppointment(id) {
    console.log(id);
    return await Appointments.findById(id).populate('doctor patient');
}

// GetPatientAppointmentById function
async function getPatientAppointmentById(user) {
    const { userId } = user;
    // console.log(userId);
    const isPatient = await Patient.findById(userId);
    // console.log(isPatient);
    if (!isPatient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
    }
    const result= await Appointments.find({ patientId: userId }).populate('doctorId');
    // console.log(result); 
    return result;

}

// GetPaymentInfoViaAppintmentId function
async function getPaymentInfoViaAppintmentId(id) {
    return await Payment.findOne({ appointmentId: id });
}

// GetPatientPaymentInfo function
async function getPatientPaymentInfo(user) {
    const { userId } = user;
    const isUserExist = await Patient.findById(userId);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
    }
    return await Payment.find({ 'appointment.patientId': userId }).populate('appointment.doctor');
}

// GetDoctorInvoices function
async function getDoctorInvoices(user) {
    const { userId } = user;
    const isUserExist = await Doctor.findById(userId);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }
    return await Payment.find({ 'appointment.doctorId': userId }).populate('appointment.patient', 'firstName lastName');
}

// DeleteAppointment function
async function deleteAppointment(id) {
    return await Appointments.findByIdAndDelete(id);
}

// UpdateAppointment function
async function updateAppointment(id, payload) {
    console.log("payload",payload)
    return await Appointments.findByIdAndUpdate(id, payload.data, { new: true });
}

// GetDoctorAppointmentsById function
async function getDoctorAppointmentsById(user, filter) {
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }

    let andCondition = { doctorId: userId };
    if (filter.sortBy == 'today') {
        const today = moment().startOf('day').toDate();
        const tomorrow = moment(today).add(1, 'days').toDate();
        andCondition.scheduleDate = { $gte: today, $lt: tomorrow };
    }
    if (filter.sortBy == 'upcoming') {
        const upcomingDate = moment().startOf('day').add(1, 'days').toDate();
        andCondition.scheduleDate = { $gte: upcomingDate };
    }
console.log();
    const result = await Appointments.find(andCondition).populate('patientId');
    return result;
}

// GetDoctorPatients function
async function getDoctorPatients(user) {
    console.log(user);
    const { userId } = user;
    const isDoctor = await Doctor.findById(userId);
    if (!isDoctor) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }

    const patients = await Appointments.find({ doctorId: userId }).distinct('patientId');
    const patientList = await Patient.find({ _id: { $in: patients } });
    return patientList;
}

// UpdateAppointmentByDoctor function
async function updateAppointmentByDoctor(user, payload) {
    const { userId } = user;
    console.log(userId);
    const isDoctor = await Doctor.findById(userId);
    console.log(isDoctor);
    if (!isDoctor) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }
    return await Appointments.findByIdAndUpdate(payload.id, payload, { new: true });
}

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointment,
    deleteAppointment,
    updateAppointment,
    getPatientAppointmentById,
    getDoctorAppointmentsById,
    updateAppointmentByDoctor,
    getDoctorPatients,
    getPaymentInfoViaAppintmentId,
    getPatientPaymentInfo,
    getDoctorInvoices
};
