module.exports = async function (markdown) {

  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/fozg-net-blogs', { useNewUrlParser: true });
  
  var Blog = require('./models/Blog');
  var MarkdownMetadataParser = require('./utils/markdow_metadata_parser');
  var mdparser = new MarkdownMetadataParser(markdown);

  mdparser.parseIt();
  var metadata = mdparser.getMetadata();
  let blog = await Blog.findOne({slug: metadata.slug});
  console.log(blog)
  if (!blog) {
    await Blog.create({...metadata, body: mdparser.getBody() });
  } else {
    await Blog.findById(blog._id).update({...metadata, body: mdparser.getBody()})
  }
  
  mongoose.disconnect();
}