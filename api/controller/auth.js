const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../connect");
const transporter = require("../middleware/transpoter");
// Registration endpoint
const register = (req, res) => {
  //CHECK USER IF EXISTS
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUE (?)";
    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      //   search that user
      const q = "SELECT * FROM users WHERE username = ?";

      db.query(q, [req.body.username], (err, userDb) => {
        if (err) return res.status(500).json(err);
        if (userDb.length === 0) return res.status(404).json("User not found!");
        // Send verification email
        const verificationLink = `http://localhost:${process.env.PORT}/auth/verify/${userDb[0].id}`;

        const mailOptions = {
          from: "info@assetmakers.com",
          to: userDb[0].email,
          subject: "Email Verification",
          text: `Please click on the following link to verify your email address: ${verificationLink}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json("Error sending verification email");
          }
          console.log("Verification email sent:", info.response);
          return res
            .status(200)
            .json("User has been created. Verification email sent.");
        });
      });
    });
  });
};

const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].id }, process.env.JWT_KEY);

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
};

// verify email
const verify = (req, res) => {
  const userId = req.params.id;

  // Construct the SQL query to update user verification
  const updateUserVerificationQuery = `UPDATE users SET verified = true WHERE id = ?`;

  // Execute the query
  db.query(updateUserVerificationQuery, [userId], (error, results, fields) => {
    if (error) {
      console.error("Error updating user verification:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    // Check if any rows were affected by the update
    if (results.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }
    // Redirect user to localhost:3000
    res.redirect("http://localhost:3000");
  });
};

module.exports = { login, logout, register, verify };
