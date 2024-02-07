const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blogs = mongoose.model('Blogs', BlogsSchema);

module.exports = Blogs;
