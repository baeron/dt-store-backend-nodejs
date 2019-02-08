const express = require("express");
const compression = require("compression");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

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
require("./routes/shoppingCard.routes")(app);
require("./routes/user.routes")(app);
// require("./app/routes/init.routes.js")(app);

// Create a Server
var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
