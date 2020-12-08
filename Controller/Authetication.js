const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");
const User = require("../Model/User");
const dotenv = require("dotenv");
const { create } = require("../Model/User");
const Processor = require("../Model/Processor");
const Tag = require("../Model/Category");
const GPU = require("../Model/Graphics");
const RAM = require("../Model/RAM");
const Storage = require("../Model/Storage");
const Category = require("../Model/Category");

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
  const {
    firstname,
    lastname,
    streetaddress,
    state,
    zipcode,
    cellphone,
    email,
    password,
  } = req.body;

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //First check to see if the user exists or not
  User.findOne({ where: { email } })
    .then((submit) => {
      if (submit === null) {
        User.create({
          firstname,
          lastname,
          streetaddress,
          state,
          zipcode,
          cellphone,
          email,
          password: hashPassword,
        })
          .then((response) => {
            console.log(response.id);
            const token = createToken(response.id);
            res.cookie("jwt", token, {
              expiresIn: maxAge,
              httpOnly: true,
              SameSite: false,
            });
            res.status(200).json({ id: response.id });
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

//This is for Login
module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((response) => {
      if (response !== null) {
        bcrypt.compare(password, response.password, (err, result) => {
          console.log(result);
          if (result === false) {
            res.status(202).send({ message: "Password is not correct" });
          } else {
            const token = createToken(response.id);
            res.cookie("jwt", token, {
              expiresIn: maxAge,
              httpOnly: true,
              SameSite: false,
            });
            res.status(200).send({ id: response.id });
          }
        });
      } else {
        res.status(201).json({ message: "Email is not registered" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getProductLaptop = async (req, res) => {
  const selection = req.params.Number;

  if (selection === "12222") {
    const processors = await Processor.findAll({
      where: { id: ["pro-3", "pro-4"] },
    });
    const graphics = await GPU.findAll({
      where: { id: ["gpu-3", "gpu-4", "gpu-5"] },
    });
    const ram = await RAM.findAll({
      where: { id: ["ram-2", "ram-3", "ram-4"] },
    });
    const storage = await Storage.findAll({
      where: { id: ["st-02", "st-03", "st-04"] },
    });
    const tag = await Category.findAll({
      where: { Tag_Description: "Laptop" },
    });

    res.status(200).json({ processors, graphics, ram, storage, tag });
  }
  if (selection === "11111") {
    const processors = await Processor.findAll();
    const graphics = await GPU.findAll();
    const ram = await RAM.findAll();
    const storage = await Storage.findAll();
    const tag = await Category.findAll({
      where: { Tag_Description: "Laptop" },
    });
    res.status(200).json({ processors, graphics, ram, storage, tag });
  }
};
