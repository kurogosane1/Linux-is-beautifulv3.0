const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const Processor = require("../Model/Processor");
const Tag = require("../Model/Category");
const GPU = require("../Model/Graphics");
const RAM = require("../Model/RAM");
const Storage = require("../Model/Storage");
const cart = require("../Model/Cart");
const Selection = require("../Model/Selection");
const Category = require("../Model/Category");
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
  const { amount, Config, customer_id } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    const name = "name";

    const Selection_id = Config.map((config) => {
      const Processor_id = auth.getProcessor(config.Processor);
      const GPU_id = auth.getProcessor(config.GPU);
      const RAM_id = auth.getProcessor(config.RAM);
      const Storage_id = auth.getProcessor(config.Storage);
      const Category_id = auth.getCategory(config.Type);

      console.log("This is line 85");
      console.log(Processor_id, GPU_id);

      //Create a selection cart
      const Selections = Selection.create({
        Processor_id,
        GPU_id,
        RAM_id,
        Storage_id,
        Category_id,
      }).then((res) => {
        console.log("This is coming from the response side for Selection");
        console.log(res);
      });
      console.log("This is coming from Line 96");
      console.log(Selections);
      return Selections;
    });

    console.log("This is coming from line 101");
    console.log(Selection_id);
    const newCart = cart
      .create({
        Selection_id,
        Total: amount / 100,
        Payment_id: paymentIntent.client_secret,
        User_id: customer_id,
      })
      .then((res) => res);
    console.log(newCart);

    res.status(200).send(paymentIntent.client_secret);
  } catch (error) {
    console.log("this is coming from the payment side");
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;
