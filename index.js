const express = require("express");
a;
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-COntrol-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// test route
app.get("/", (req, res, next) => {
  res.send("hello world");
});

// CRUD routes
app.use("/", require("./routes/users"));

// error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// sync database
sequelize
  .sync()
  .then((result) => {
    console.log("Database connected");
    app.listen(3000);
  })j
  .catch((err) => console.log(err));
