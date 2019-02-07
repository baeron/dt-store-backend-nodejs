const ShoppingCard = require("../models/shoppingCard.model");

exports.findAll = (req, res) => {
  ShoppingCard.find()
    .then(shoppingCards => {
      res.send(shoppingCards);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.addShopingCard = (req, res) => {
  const newShoppingCard = new ShoppingCard({
    status: req.body.status,
    products: req.body.products
  });
  debugger;
  console.log(newShoppingCard);
  newShoppingCard.save(err => {
    if (err) {
      res.status(404).send({ message: err.message });
    } else {
      res.status(201).send({ message: "Created" });
    }
  });
};
