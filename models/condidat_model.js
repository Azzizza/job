const mongoose = require("mongoose");

const CondidatSchema = new mongoose.Schema({
  username: String,
  phone: Number,
  Email: String,
  password: String,
  jobTile: String,
  yerasOfExperience: Number,
});

module.exports = mongoose.model('Condidat',CondidatSchema);