module.exports = function(app) {
  var shoppingCarts = require("../controllers/shoppingCard.controller");

  app.get("/api/shopping-carts", shoppingCarts.findAll);
  app.post("/api/shopping-carts", shoppingCarts.addShopingCard);
};
