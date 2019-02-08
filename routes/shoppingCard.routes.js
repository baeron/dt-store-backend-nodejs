module.exports = function(app) {
  var shoppingCarts = require("../controllers/shoppingCard.controller");

  app.get("/api/shopping-carts", shoppingCarts.findAll);
  app.get("/api/shopping-cart/sold", shoppingCarts.findAllSold);
  app.post("/api/shopping-carts", shoppingCarts.addShopingCard);

  app.get("/api/shopping-carts/:id", shoppingCarts.findShoppingCardById);
  app.put("/api/shopping-carts/:id", shoppingCarts.changeShoppingCardStatus);
};
