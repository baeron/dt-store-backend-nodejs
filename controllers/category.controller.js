const Category = require("../models/category.model");

exports.findAll = (req, res) => {
  Category.find()
    .then(category => {
      res.send(category);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.addCategory = (req, res) => {
  const newCategory = new Category({
    backgroundImage: req.body.backgroundImage || "",
    categoryDescroption: req.bodycategoryDescroption || "",
    categoryName: req.body.categoryName || "",
    categoryShortDescroption: req.body.categoryShortDescroption || ""
  });
  newCategory.save(err => {
    if (err) {
      res.status(404).send({ message: err.message });
    } else {
      res.status(201).send({ message: "Created" });
    }
  });
};
