const Favourite = require('../model/Favorites');
const Patient = require('../model/Favorites'); // Ensure you have a patient.model.js file
const Doctor = require('../model/Doctor'); // Ensure you have a doctor.model.js file
const ApiError = require('../Error/ApiError');
const httpStatus = require('http-status');

const createFavourite = async (user, payload) => {
  const isUserExist = await Patient.findById(user.userId);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
  }

  // Check if the doctor is already a favorite
  const isFavourite = await Favourite.findOne({
    doctorId: payload.doctorId,
  });

  if (isFavourite) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Already a favorite doctor !!');
  } else {
    payload.patientId = isUserExist._id;
    const favourite = await Favourite.create(payload);
    return favourite;
  }
};

const removeFavourite = async (user, payload) => {
  const isUserExist = await Patient.findById(user.userId);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
  }

  // Check if the doctor is a favorite
  const isFavourite = await Favourite.findOne({
    doctorId: payload.doctorId,
  });

  if (!isFavourite) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Doctor is not in favourites !!');
  } else {
    const favourite = await Favourite.findByIdAndDelete(isFavourite._id);
    return favourite;
  }
};

const getPatientFavourites = async (user) => {
  const isUserExist = await Patient.findById(user.userId);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Patient Account is not found !!');
  }

  const favourites = await Favourite.find({
    patientId: isUserExist._id,
  }).populate('doctor');

  return favourites;
};

module.exports = {
  createFavourite,
  removeFavourite,
  getPatientFavourites,
};
