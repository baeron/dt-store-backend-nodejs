const Product = require("./product.model.js");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const CustomerSchema = mongoose.Schema({
  firstname: String,
  product: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

module.exports = mongoose.model("Customer", CustomerSchema);
