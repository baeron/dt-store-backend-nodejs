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

exports.findAllSold = (req, res) => {
  ShoppingCard.find({ status: "fulfilled" })
    .populate("products")
    .exec(function(err, fullfieldShoppingCard) {
      if (fullfieldShoppingCard) {
        res.send(fullfieldShoppingCard);
      } else {
        res.status(404).send({
          message: err.message
        });
      }
    });
};

exports.findShoppingCardById = (req, res) => {
  const cardId = req.params.id;
  ShoppingCard.findById(cardId)
    .populate("products")
    .exec(function(err, shoppingCard) {
      if (shoppingCard) {
        res.send(shoppingCard);
      } else {
        res.status(404).send({
          message: err.message
        });
      }
    });
};

exports.addShopingCard = (req, res) => {
  debugger;
  console.log(req.body);
  const newShoppingCard = new ShoppingCard({
    status: req.body.status,
    products: req.body.products
  });
  newShoppingCard.save(err => {
    if (err) {
      res.status(404).send({ message: err.message });
    } else {
      res.status(201).send({ message: "Created" });
    }
  });
};

exports.changeShoppingCardStatus = (req, res) => {
  debugger;
  console.log(req.body);
  if (req.params.id) {
    ShoppingCard.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) {
        res.status(404).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Ok" });
      }
    });
  } else {
    sendJSONresponse(res, 400, {
      message:
        "Some problem with request params, please check parametrs from client side service"
    });
  }
};
