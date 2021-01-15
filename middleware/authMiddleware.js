const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

//check the authentication status
module.exports.verifyAuth = (req, res, next) => {
  const decodedCookie = req.cookies.jwt;

  const token = decodedCookie;
  //check json webtoken exists & is verified

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/Login");
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports.verAuth = (req, res, next) => {
  console.log(`This is coming from middleware ${req.headers.cookie}`);

  const decodedCookie = req.cookies.jwt;

  const token = decodedCookie;
  //check json webtoken exists & is verified
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/Login");
      } else {
        next();
      }
    });
  } else {
    res.json({
      message: "User is not valid",
      status: 401,
      action: "redirect to Login",
    });
  }
};
