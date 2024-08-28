const mongoose = require("mongoose");

const CommSchema = new mongoose.Schema({
  commentaires: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  note: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comm", CommSchema);
