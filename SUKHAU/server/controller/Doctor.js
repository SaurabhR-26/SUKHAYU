const DoctorService = require('./DoctorService');
const httpStatus = require('http-status');
const catchAsync = require('../shared/catchAsync');
const sendResponse = require('../shared/sendResponse');
const Doctor = require('../model/Doctor.js'); // Import your Mongoose Doctor model
const pick = require('../shared/pick');
// const { IDoctorFiltersData, IDoctorOptions } = require('./doctor.interface')
// console.log(DoctorService)

const createDoctor = catchAsync(async (req, res) => {
  await DoctorService.createDoctor(req.body); // Assuming DoctorService is a service using Mongoose to create a doctor
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Successfully Doctor Created !!',
    success: true,
  });
});

const getAllDoctors = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['searchTerm','firstName','lastName','gender','city', 'max', 'min', 'specialist']);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await DoctorService.getAllDoctors(filter, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Successfully Retrieve doctors !!',
    success: true,
    data: result,
  });
});

const getDoctor = catchAsync(async (req, res) => {
  const result = await DoctorService.getDoctor(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Successfully Get Doctor !!',
    success: true,
    data: result,
  });
});

const deleteDoctor = catchAsync(async (req, res) => {
  const result = await DoctorService.deleteDoctor(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Successfully Deleted Doctor !!',
    success: true,
    data: result,
  });
});

const updateDoctor = catchAsync(async (req, res) => {
  const result = await DoctorService.updateDoctor(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Successfully Updated Doctor !!',
    success: true,
    data: result,
  });
});

module.exports = {
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctor,
};
