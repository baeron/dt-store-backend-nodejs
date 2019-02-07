const Product = require("./product.model.js");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ShoppingCardSchema = mongoose.Schema({
  status: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

module.exports = mongoose.model("ShoppingCard", ShoppingCardSchema);
