import catchAsync from "../shared/catchAsync"
import sendResponse from "../shared/sendResponse"
import { PrescriptionService } from "./PrescriptionService"

const createPrescription = catchAsync(async (req, res) => {
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
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve All Prescription !!",
    success: true,
    data: result
  })
})

export const PrescriptionController = {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  deletePrescription,
  getPatientPrescriptionById,
  updatePrescription,
  getDoctorPrescriptionById
}
