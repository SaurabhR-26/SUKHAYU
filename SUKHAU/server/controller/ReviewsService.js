const httpStatus = require('http-status');
const ApiError = require('../Error/ApiError');
const Review = require('../model/Review');
const Doctor = require('../model/Doctor');
const Patient = require('../model/Patient');

const create = async (user, payload) => {
    const isUserExist = await Patient.findById(user.userId);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
    }

    const isDoctorExist = await Doctor.findById(payload.doctorId);
    if (!isDoctorExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }

    const review = new Review({
        ...payload,
        patientId: isUserExist.id
    });

    await review.save();
    return review;
};

const getAllReviews = async () => {
    const result = await Review.find()
        .populate('doctor', 'firstName lastName')
        .populate('patient', 'firstName lastName');
    return result;
};

const getSingleReview = async (id) => {
    const result = await Review.findById(id)
        .populate('doctor', 'firstName lastName')
        .populate('patient', 'firstName lastName');
    return result;
};

const getDoctorReviews = async (id) => {
    const isUserExist = await Doctor.findById(id);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }
    const result = await Review.find({ doctorId: isUserExist.id })
        .populate('doctor', 'firstName lastName')
        .populate('patient', 'firstName lastName');
    return result;
};

const deleteReviews = async (id) => {
    const result = await Review.findByIdAndDelete(id);
    return result;
};

const updateReview = async (id, payload) => {
    const result = await Review.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const replyReviewByDoctor = async (user, id, payload) => {
    const isUserExist = await Doctor.findById(user.userId);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Doctor Account is not found !!');
    }

    const result = await Review.findByIdAndUpdate(id, { response: payload.response }, { new: true });
    return result;
};

module.exports = {
    create,
    getAllReviews,
    getDoctorReviews,
    deleteReviews,
    updateReview,
    getSingleReview,
    replyReviewByDoctor
};
