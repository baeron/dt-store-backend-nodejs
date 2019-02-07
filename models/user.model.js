const ShoppingCard = require("../models/shoppingCard.model");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  login: String,
  email: String,
  password: String,
  shoppingCart: { type: Schema.Types.ObjectId, ref: "ShoppingCard" }
});

module.exports = mongoose.model("User", UserSchema);
