const catchAsync = require("../shared/catchAsync");
const sendResponse = require("../shared/sendResponse");
const PrescriptionService = require("./PrescriptionService");

const createPrescription = catchAsync(async (req, res) => {
  console.log(req.user)
  await PrescriptionService.createPrescription(req.user, req.body)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Created Prescription !!",
    success: true
  })
})

const getDoctorPrescriptionById = catchAsync(async (req, res) => {
  const result = await PrescriptionService.getDoctorPrescriptionById(req.user)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve Doctor Prescriptions !!",
    success: true,
    data: result
  })
})

const updatePrescription = catchAsync(async (req, res) => {
  const result = await PrescriptionService.updatePrescription(
    req.params.id,
    req.body
  )
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Updated Prescription !!",
    success: true,
    data: result
  })
})

const getPatientPrescriptionById = catchAsync(async (req, res) => {
  const result = await PrescriptionService.getPatientPrescriptionById(req.user)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve Patient Prescription !!",
    success: true,
    data: result
  })
})

const deletePrescription = catchAsync(async (req, res) => {
  const result = await PrescriptionService.deletePrescription(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Deleted Prescription !!",
    success: true,
    data: result
  })
})

const getPrescriptionById = catchAsync(async (req, res) => {
  const result = await PrescriptionService.getPrescriptionById(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve Prescription !!",
    success: true,
    data: result
  })
})

const getAllPrescriptions = catchAsync(async (req, res) => {
  const result = await PrescriptionService.getAllPrescriptions()
  console.log("this is " + result)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve All Prescription !!",
    success: true,
    data: result
  })
})

module.exports = {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  deletePrescription,
  getPatientPrescriptionById,
  updatePrescription,
  getDoctorPrescriptionById
}
