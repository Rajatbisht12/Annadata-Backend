const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ownerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donor",
    required: true,
  },
  claimerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Volunteer",
    default: null,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true, // animal food, humanfood, waster
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  feedback: {
    type: String,
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
