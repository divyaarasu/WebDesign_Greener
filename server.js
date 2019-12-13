const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const bill = require("./routes/api/billData");
<<<<<<< HEAD
const cart = require('./routes/api/cart');
const order = require('./routes/api/order');
const products = require("./routes/api/productsData");
=======
const garbage = require("./routes/api/garbageData");
>>>>>>> f7588d67114931e2164e099ccf882f13dae78755

const app = express();

app.use(cors());
// Bodyparser middleware 
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/billdata", bill);
<<<<<<< HEAD
app.use("/api/cart", cart);
app.use("/api/order", order);
app.use("/api/productsData",products);
=======
app.use("/api/garbageData", garbage);
>>>>>>> f7588d67114931e2164e099ccf882f13dae78755


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Greener Server: Up and running on port ${port} !`));