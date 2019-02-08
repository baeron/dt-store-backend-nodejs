const Product = require("../models/product.model.js");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const CategorySchema = mongoose.Schema({
  backgroundImage: String,
  categoryDescroption: String,
  categoryName: String,
  categoryShortDescroption: String
});

module.exports = mongoose.model("Category", CategorySchema);
