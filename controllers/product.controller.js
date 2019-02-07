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

exports.findProductById = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .populate("category")
    .exec(function(err, product) {
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({
          message: "Somthing was wrong"
        });
      }
    });
};

exports.findAllProductsByCategoryId = (req, res) => {
  const categoryId = req.params.id;
  Product.find({ category: categoryId }).exec(function(err, products) {
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({
        message: "Somthing was wrong"
      });
    }
  });
};

exports.addProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    category: req.body.category
  });
  newProduct.save(err => {
    if (err) {
      res.status(404).send({ message: err.message });
    } else {
      res.status(201);
    }
  });
};
