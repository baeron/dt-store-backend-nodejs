module.exports = function(app) {
  var products = require("../controllers/product.controller");

  app.get("/api/products", products.findAll);
};
