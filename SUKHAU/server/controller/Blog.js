const BlogService = require('./BlogService');
const httpStatus = require('http-status');
const pick = require('../shared/pick');
const catchAsync = require('../shared/catchAsync');
const sendResponse = require('../shared/sendResponse');

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog Created Successfully',
    success: true,
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['searchTerm', 'title', 'description']);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await BlogService.getAllBlogs(filter, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blogs Retrieve Successfully',
    success: true,
    data: result,
  });
});

const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog Retrieve Successfully',
    success: true,
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const result = await BlogService.updateBlog(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog Updated Successfully',
    success: true,
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  await BlogService.deleteBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog Deleted Successfully',
    success: true,
  });
});

module.exports = {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
