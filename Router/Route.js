const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const Processor = require("../Model/Processor");
const Tag = require("../Model/Category");
const GPU = require("../Model/Graphics");
const RAM = require("../Model/RAM");
const Storage = require("../Model/Storage");
const cart = require("../Model/Cart");
const bcrypt = require("bcrypt");
const {
  getOrder,
  getUserInfo,
  LogOut,
  getProductLaptop,
  paymentProcess,
  signup_post,
  login,
  getProductData,
} = require("../Controller/Authetication");
const { verifyAuth, verAuth } = require("../middleware/authMiddleware");
const {
  isAlreadyLogged,
  LoginUser,
  SessionCheck,
  PaymentSession,
} = require("../middleware/verifyMiddleware");

//Basic Get Route
// router.get("/", (req, res) => {
//   res.send("Hello World");
// });
router.get("/User", (req, res) => {
  const user = User.findOne(req.body.email);
  // compare password
  const check = bcrypt.compare(req.body.email, user.password, (err, result) => {
    err
      ? res.sendStatus(404).send("Password does not match")
      : res.send(201).send("Password matches");
  });
});
router.get("/Create", (req, res) => {
  User.findAll()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});
router.get("/Processor", (req, res) => {
  Processor.findAll();
  res.send(Processor);
});
router.get("/Tag", (req, res) => {
  Tag.findAll();
  res.send(Tag);
});
router.get("/GPU", (req, res) => {
  GPU.findAll();
  res.json(GPU);
});
router.get("/RAM", (req, res) => {
  RAM.findAll();
  res.send(RAM);
});
router.get("/Storage", (req, res) => {
  const storage = Storage.findAll();
  res.send(storage);
});
router.get("/cart", (req, res) => {
  cart.findAll();
  res.send(cart);
});
router.post("/SignUp", signup_post);

//This is the main route
router.route("/").get(isAlreadyLogged, (req, res) => {
  res.status(200).send({ message: "not logged in" });
});

//payment session
router.route("/Payment").post(PaymentSession, paymentProcess);
//User login
router
  .route("/Login")
  .get(isAlreadyLogged, (req, res) => console.log("this fired"))
  .post(isAlreadyLogged, login);

//User page
router.route("/:id").get(SessionCheck, getUserInfo).post(SessionCheck, LogOut);

//User Others page
router.route("/:id/orders").get(SessionCheck);

//User Orders deep dive
router.route("/:id/orders/:order").get(SessionCheck, getOrder);

//User others
router.route("/:id/others").get(SessionCheck);




router.post("/Logout", LogOut);
router.get("/DeepinPro/BuyNow/:Number", getProductLaptop);
router.get("/iTab/BuyNow", getProductData);

module.exports = router;
