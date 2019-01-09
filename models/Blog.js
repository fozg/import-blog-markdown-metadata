const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', { 
  slug: String,
  name: String,
  createdBy: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  body: String,
  tags: String,
  created: Date,
  updated: Date,
  published: Boolean,
  format: String, // md || draft
});

module.exports = Blog;
