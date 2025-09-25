//Write missing codes here
const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
var BlogModel=mongoose.model("monsoon",schema)
module.exports=BlogModel
//Write missing codes here
