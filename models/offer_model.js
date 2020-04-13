const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  companyName: String,
  jobTile: String,
  ContratType: String,
  OfferContent: String
});

module.exports = mongoose.model('offerSchema',offerSchema);