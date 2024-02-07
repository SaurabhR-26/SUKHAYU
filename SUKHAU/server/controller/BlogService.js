 import calculatePagination from "../shared/paginationHelper";
const Blog = require('../model/Blogs');




const blogFilters = {
    searchTerm: undefined,
    title: undefined,
    description: undefined
};

// Define the searchable fields for the Blog
const blogSearchablFields = ['title', 'description'];

// Export the constant
module.exports = { blogFilters, blogSearchablFields };
async function createBlog(userId, payload) {
  try {
    const blog = new Blog({
      title: payload.title,
      content: payload.content,
      user: userId,
    });
    const result = await blog.save();
    return result;
  } catch (error) {
    throw error;
  }
}

async function getAllBlogs(filters, options) {
  try {
      const { limit, page, skip } = calculatePagination(options);
      const { searchTerm, ...filterData } = filters;

      const andConditions = [];
      if (searchTerm) {
          andConditions.push({
              $or: blogSearchablFields.map((field) => ({
                  [field]: { $regex: searchTerm, $options: 'i' }
              }))
          });
      }
      if (Object.keys(filterData).length > 0) {
          andConditions.push(filterData);
      }
      const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};

      const result = await Blog.find(whereConditions)
          .skip(skip)
          .limit(limit)
          .populate({
              path: 'user',
              select: 'firstName lastName designation'
          })
          .sort(options.sortBy && options.sortOrder ? { [options.sortBy]: options.sortOrder } : { createdAt: 'desc' });

      const total = await Blog.countDocuments(whereConditions);

      return {
          meta: {
              page,
              limit,
              total
          },
          data: result
      };
  } catch (error) {
      throw new Error(error.message);
  }
}

async function getBlog(id) {
  try {
    const result = await Blog.findById(id).populate('user', 'firstName lastName designation');
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteBlog(id) {
  try {
    const result = await Blog.findByIdAndRemove(id);
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateBlog(id, payload) {
  try {
    const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
};
