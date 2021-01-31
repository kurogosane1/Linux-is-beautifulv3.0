const sessions = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Model/User");

//This is the middleware to check if the user is logged in or not
module.exports.isAlreadyLogged = async (req, res, next) => {
  console.log(req.session);
  if (req.session.user && req.cookies.SAM) {
    //If sessions is valid, then get the id to get the userinformation
    let id = req.session.user;
    // Trying to find the user id if the user already exists
    User.findAll({ where: { id } }).then((response) => {
      res.status(200).send({ id: response.id });
    });
  } else {
    next();
  }
};

//Checking if a session with user already exists during refresh
module.exports.SessionCheck = (req, res, next) => {
  console.log(req.sessionID);
  console.log(req.sesssion);
  const { user } = req.session;
  console.log(`The user is ${user}`);
  if (user) {
    next();
  } else {
    res.status(403).send({ message: "user is not logged in" });
  }
};

module.exports.PaymentSession = async (req, res, next) => {
  if (req.session.user && req.session.user) {
    next();
  } else {
    res.status(403).send({ message: "user is not logged in" });
  }
};

//This is the next function that would log the user in if the req sessions is not happenging
module.exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;

  User.findAll({ where: { email } })
    .then((response) => {
      if (response !== null) {
        bcrypt.compare(password, response.password, (err, result) => {
          if (!result) {
            console.log(result);
            res.status(202).send({ message: "Password is not correct" });
          } else {
            req.session.user = response.id;
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
