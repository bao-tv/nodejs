const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const CourseSchema = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  videoID: {type: String, require: true},
  slug: {type: String, slug: 'name',unique: true},
},
{ timestamps: true }
);

CourseSchema.plugin(mongoose_delete , {
  deletedAt : true,
  overrideMethods: 'all'
  });

module.exports = mongoose.model('Course', CourseSchema);