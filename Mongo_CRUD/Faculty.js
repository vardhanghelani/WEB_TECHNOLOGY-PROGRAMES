const mongoose =require("mongoose");
const Schema = mongoose.Schema({
  id: Number,
  name : String,
  designation :String
});

module.exports=mongoose.model('Faculty',Schema);