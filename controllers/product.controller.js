const Product = require("../models/product.model");

exports.findAll = (req, res) => {
  Product.find()
    .then(product => {
      res.send(product);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};
