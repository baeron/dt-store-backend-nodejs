var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require("./config/mongodb.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch(err => {
    console.log("Could not connect to MongoDB.");
    process.exit();
  });

require("./routes/category.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/product.routes")(app);
// require("./app/routes/init.routes.js")(app);

// Create a Server
var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
