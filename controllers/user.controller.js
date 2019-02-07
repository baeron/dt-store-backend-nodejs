const User = require("../models/user.model");

exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.addUser = (req, res) => {
  const newUser = new User({
    login: req.body.login,
    email: req.body.email,
    password: req.body.password
  });
  debugger;
  console.log(newUser);
  newUser.save(err => {
    if (err) {
      res.status(404).send({ message: err.message });
    } else {
      res.status(201);
    }
  });
};
