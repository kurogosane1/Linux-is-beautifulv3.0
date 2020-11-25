const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

//check the authentication status
function verifyAuth(req, res, next) {
  const token = req.cookie.jwt;
  //check json webtoken exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/Login");
      } else {
        console.log(`This is the verify side ${decodedToken}`);
        next();
      }
    });
  } else {
    res.redirect("/Login");
  }
}

module.exports = verifyAuth;
