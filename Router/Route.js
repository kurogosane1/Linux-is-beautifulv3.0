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
const auth = require("../Controller/Authetication");
const verify = require("../middleware/authMiddleware");
const stripe = require("stripe")(process.env.SECRET_KEY);

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
  Storage.findAll();
  res.send(Storage);
});
router.get("/cart", (req, res) => {
  cart.findAll();
  res.send(cart);
});
router.post("/SignUp", auth.signup_post);
router.post("/Login", auth.login);
router.get("/:id/others", verify);
router.get("/:id/orders", verify);
router.get("/:id", verify);
router.post("/Logout", auth.LogOut);
router.get("/DeepinPro/BuyNow/:Number", auth.getProductLaptop);
router.post("/Payment", async (req, res) => {
  const { amount } = req.body;
  console.log(typeof amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.status(200).send(paymentIntent.client_secret);
  } catch (error) {
    console.log("this is coming from the payment side");
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;
