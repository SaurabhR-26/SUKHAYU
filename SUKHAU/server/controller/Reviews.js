import catchAsync from "../shared/catchAsync"
import sendResponse from "../shared/sendResponse"
import { ReviewService } from "./ReviewsService"

const creatReview = catchAsync(async (req, res) => {
  const result = await ReviewService.create(req.user, req.body)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully review Created !!",
    success: true,
    data: result
  })
})

const getAllReview = catchAsync(async (req, res) => {
  const result = await ReviewService.getAllReviews()
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve review !!",
    success: true,
    data: result
  })
})

const getSingleReview = catchAsync(async (req, res) => {
  const result = await ReviewService.getSingleReview(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve review !!",
    success: true,
    data: result
  })
})

const getDoctorReviews = catchAsync(async (req, res) => {
  const result = await ReviewService.getDoctorReviews(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Retrieve review !!",
    success: true,
    data: result
  })
})

const deleteReview = catchAsync(async (req, res) => {
  const result = await ReviewService.deleteReviews(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Deleted review !!",
    success: true,
    data: result
  })
})

const updateReview = catchAsync(async (req, res) => {
  const result = await ReviewService.updateReview(req.params.id, req.body)
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Updated review !!",
    success: true,
    data: result
  })
})

const replyReviewByDoctor = catchAsync(async (req, res) => {
  const result = await ReviewService.replyReviewByDoctor(
    req.user,
    req.params.id,
    req.body
  )
  sendResponse(res, {
    statusCode: 200,
    message: "Successfully Reply review !!",
    success: true,
    data: result
  })
})

export const ReviewController = {
  creatReview,
  updateReview,
  getAllReview,
  getDoctorReviews,
  deleteReview,
  getSingleReview,
  replyReviewByDoctor
}
