module.exports = function(app) {
  var products = require("../controllers/product.controller");

  app.get("/api/products", products.findAll);
  app.get("/api/products/:id", products.findProductById);
  app.get("/api/products/category/:id", products.findAllProductsByCategoryId);

  app.post("/api/products", products.addProduct);
};
