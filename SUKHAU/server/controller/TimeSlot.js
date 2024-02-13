const catchAsync = require("../shared/catchAsync");
const sendResponse = require("../shared/sendResponse");
const  TimeSlotService  = require("./TimeSlotService");

const createTimeSlot = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await TimeSlotService.createTimeSlot(req.user, req.body)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully created Time Slot !!",
    success: true,
    data: result
  })
})

const getAllTimeSlot = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await TimeSlotService.getAllTimeSlot()
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully  get all Time Slot !!",
    success: true,
    data: result
  })
})

const getMyTimeSlot = catchAsync(async (req, res) => {
  console.log(req.user);
  const result = await TimeSlotService.getMyTimeSlot(req.user, req.query)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully  get all Time Slot !!",
    success: true,
    data: result
  })
})

const getTimeSlot = catchAsync(async (req, res) => {
  const result = await TimeSlotService.getTimeSlot(req.params.id)
  console.log(result);
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully get Time Slot !!",
    success: true,
    data: result
  })
})

const updateTimeSlot = catchAsync(async (req, res) => {
  await TimeSlotService.updateTimeSlot(req.user, req.params.id, req.body)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully updated Time Slot !!",
    success: true
  })
})

const deleteTimeSlot = catchAsync(async (req, res) => {
  const result = await TimeSlotService.deleteTimeSlot(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully deleted Time Slot !!",
    success: true,
    data: result
  })
})
const getAppointmentTimeOfEachDoctor = catchAsync(async (req, res) => {
  const result = await TimeSlotService.getAppointmentTimeOfEachDoctor(
    req.params.id,
    req.query
  )
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully deleted Time Slot !!",
    success: true,
    data: result
  })
})

module.exports = {
  getAllTimeSlot,
  getTimeSlot,
  updateTimeSlot,
  createTimeSlot,
  deleteTimeSlot,
  getMyTimeSlot,
  getAppointmentTimeOfEachDoctor
}
