module.exports = function(app) {
  var users = require("../controllers/user.controller");

  app.get("/api/users", users.findAll);
  app.post("/api/users", users.addUser);
};
