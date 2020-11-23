const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");
const User = require("../Model/User");
const dotenv = require("dotenv");
const { create } = require("../Model/User");
const maxAge = 5 * 60 * 60;




//Create tokens
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//handle Errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };
  //duplicate email error
  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }
  //Validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup_post = async (req, res) => {
  console.log(req.body);

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //First check to see if the user exists or not
  User.findOne({ where: { email: req.body.email } })
    .then((submit) => {
      if (submit === null) {
        User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          streetaddress: req.body.streetaddress,
          state: req.body.state,
          zipcode: req.body.zipcode,
          cellphone: req.body.cellphone,
          email: req.body.email,
          password: hashPassword,
        })
          .then((response) => {
            const token = createToken(response.id);
            res.cookie("jwt", token, { expiresIn: maxAge });
            res.status(200).send({ id: response.id });
          })
          .catch((err) => {
            console.log(
              `This is the error when trying to create new user${err}`
            );
          });
      } else {
        res.status(400).json({ message: "User Already Exists" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
