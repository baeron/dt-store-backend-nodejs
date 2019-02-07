module.exports = function(app) {
  var customers = require("../controllers/customer.controller");

  // Get All Customers
  app.get("/api/customers", customers.findAll);

  // Find a single Customers by Name
  // app.get("/api/customers/:findById", customers.findById);

  // Find all Customers that learnt a given subject
  // app.get("/api/customers/products/:productId", customers.findByProductId);
};
