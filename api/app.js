var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var logger = require("morgan");
require("dotenv").config();
var listingsRouter = require("./routes/listings");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var cityRouter = require("./routes/city");
var messageRouter = require("./routes/message");
var cors = require("cors");
const db = require("./connect");
// const os = require("os");

var app = express();
app.use(cookieParser());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static serving of public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routes
app.use("/list", listingsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/city", cityRouter);
app.use("/message", messageRouter);

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
  console.log(
    `API server running at http://localhost:${process.env.PORT || PORT}`
  );
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
