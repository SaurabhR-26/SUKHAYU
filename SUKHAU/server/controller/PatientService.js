// patientService.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const ApiError = require('../Error/ApiError');
const Auth=require("../model/Auth")

const Patient=require('../model/Patient')
// Function to create a patient using Mongoose
const createPatient = async (payload) => {
    try {
        // Create patient
        const patient = await Patient.create(payload);

        // Hash password if provided
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        }

        // Simulate the transaction by deleting patient if auth creation fails
        const auth = await Auth.create({
            email: patient.email,
            password: payload.password,
            role: 'patient',
            userId: patient._id
        });

        return { patient, auth };
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
};

// Function to get all patients using Mongoose
const getAllPatients = async () => {
    try {
        const patients = await Patient.find();
        return patients;
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
};

// Function to get a patient by ID using Mongoose
const getPatient = async (id) => {
    try {
        const patient = await Patient.findById(id);
        console.log(patient);
        return patient;
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
};

// Function to delete a patient by ID using Mongoose
const deletePatient = async (id) => {
    try {
        const patient = await Patient.findByIdAndDelete(id);
        // Delete associated auth if exists
        if (patient) {
            await Auth.findOneAndDelete({ email: patient.email });
        }
        return patient;
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
};

// Function to update a patient by ID using Mongoose
const updatePatient = async (id, payload) => {
    try {
        const patient = await Patient.findByIdAndUpdate(id, payload, { new: true });
        return patient;
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
};

module.exports = {
    createPatient,
    updatePatient,
    getPatient,
    getAllPatients,
    deletePatient
};
