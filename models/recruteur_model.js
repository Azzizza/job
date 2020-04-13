const mongoose = require("mongoose");

const RecruteurSchema = new mongoose.Schema({
  username: String,
  phone: Number,
  Email: String,
  password: String,
  companyName: String
});


module.exports = mongoose.model('Recruteur',RecruteurSchema);
