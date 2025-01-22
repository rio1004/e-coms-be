const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    required: true,
  },
  {
    qty: String,
    required: false,
  }
);

module.exports = mongoose.model("Product", productSchema);
