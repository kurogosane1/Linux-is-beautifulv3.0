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
} = require("../Controller/Authetication");
const { verifyAuth, verAuth } = require("../middleware/authMiddleware");

//Basic Get Route
router.get("/", (req, res) => {
  res.send("Hello World");
});
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
  res.send(GPU);
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
router.post("/Login", login);
router.get("/:id/others", verifyAuth);
router.get("/:id/orders", verifyAuth);
router.get("/:id/orders/:order", verifyAuth, getOrder);
router.get("/:id", verifyAuth, getUserInfo);
router.post("/Logout", LogOut);
router.get("/DeepinPro/BuyNow/:Number", getProductLaptop);
router.post("/Payment", verAuth, paymentProcess);
module.exports = router;
