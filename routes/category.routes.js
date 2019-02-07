module.exports = function(app) {
  var categories = require("../controllers/category.controller");

  app.get("/api/categories", categories.findAll);
  app.post("/api/categories", categories.addCategory);
};
