const Category = require("../models/category.model");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" }
});

module.exports = mongoose.model("Product", ProductSchema);
