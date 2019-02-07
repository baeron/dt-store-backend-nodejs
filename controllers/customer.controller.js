const Customer = require("../models/customer.model");

exports.findAll = (req, res) => {
  Customer.find()
    .then(customer => {
      res.send(customer);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};
