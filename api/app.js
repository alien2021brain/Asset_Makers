var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var listingsRouter = require("./routes/listings");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

const db = require("./connect");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/list", listingsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const PORT = 8000;

app.listen(PORT || process.env.PORT, () => {
  console.log("Api Working");
  // Connect to MySQL
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database");
  });
});

module.exports = app;
