const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");
const User = require("../Model/User");
const dotenv = require("dotenv");
const { create } = require("../Model/User");
const Processor = require("../Model/Processor");
const Cart = require("../Model/Cart");
const stripe = require("stripe")(process.env.SECRET_KEY);
const Tag = require("../Model/Category");
const GPU = require("../Model/Graphics");
const RAM = require("../Model/RAM");
const Storage = require("../Model/Storage");
const Category = require("../Model/Category");
const Selection = require("../Model/Selection");
const Users = require("../Model/User");

const maxAge = 5 * 60 * 60;

//To post into server side
const saveOrder = (data) => {
  const { Proc, graphics, memory, storage, category } = data;
  const Processor_id = Processor.findOne({ where: { name: Proc } });
  const GPU_id = GPU.findOne({ where: { name: graphics } });
  const RAM_id = RAM.findOne({ where: { name: memory } });
  const Storage_id = Storage.findOne({ where: { name: storage } });
  const Category_id = Category.findOne({ where: { name: category } });

  //Saving it to Cart model
  Selection.create({
    Processor_id,
    GPU_id,
    RAM_id,
    Storage_id,
    Category_id,
  }).then((response) => {
    if (response !== null) {
      res.status(200).json({ id: response.id });
    } else {
      res.status(401).json({ action: "Failure" });
    }
  });
};

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

//signup post
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

//This is for Logging Out
module.exports.LogOut = (req, res) => {
  const id = req.body.id;
  console.log(id);
  Users.findOne({ where: { id } }).then((response) => {
    if (response !== null) {
      res.cookie("jwt", "", { expiresIn: 1 });
      res.sendStatus(200);
    } else {
      console.err();
    }
  });
};

//get product laptops
module.exports.getProductLaptop = async (req, res) => {
  const selection = req.params.Number;
  let processors;
  let graphics;
  let ram;
  let storage;
  let category;

  if (selection === "12222") {
    await Processor.findAll({
      where: { id: ["pro-3", "pro-4"] },
    }).then((res) => (processors = res));
    await GPU.findAll({
      where: { id: ["gpu-3", "gpu-4", "gpu-5"] },
    }).then((res) => (graphics = res));
    await RAM.findAll({
      where: { id: ["ram-2", "ram-3", "ram-4"] },
    }).then((res) => (ram = res));
    await Storage.findAll({
      where: { id: ["st-02", "st-03", "st-04"] },
    }).then((res) => (storage = res));
    await Category.findAll({
      where: { Tag_Description: "Laptop" },
    }).then((res) => (category = res));

    res.status(200).send({ processors, graphics, ram, storage, category });
  }
  if (selection === "11111") {
    const processors = await Processor.findAll();
    const graphics = await GPU.findAll();
    const ram = await RAM.findAll();
    const storage = await Storage.findAll();
    const tag = await Category.findAll({
      where: { Tag_Description: "Laptop" },
    });
    res.status(200).send({ processors, graphics, ram, storage, category });
  }
};

//Make payment with stripe
module.exports.paymentProcess = async (req, res) => {
  const { amount, Config, customer_id, Order_Number } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).send(paymentIntent.client_secret);

    //Bulk create the Configuration of multiple items user has selected
    const configs = await Selection.bulkCreate([...Config, Order_Number], {
      returning: true,
    }).then((response) => {
      const result_id = response.map((r) => r.id);
      result_id;
    });

    const newCart = await Cart.create({
      Order_Number,
      User_id: customer_id,
      Total: amount / 100,
      Payment_id: paymentIntent.client_secret,
    }).then((response) => {
      console.log("This is the cart side");
      response;
    });
  } catch (error) {
    console.log("this is coming from the payment side");
    res.status(500).json({
      message: error.message,
    });
  }
};

//Get Processor info requested
module.exports.getProcessor = (data) => {
  const info_requested = Processor.findOne({
    where: { name: data },
  }).then((res) => {
    return res;
  });
  return info_requested;
};
//Get GPU info requested
module.exports.getGPU = async (data) => {
  const info_requested = await GPU.findOne({ where: { name: data } }).then(
    (res) => res.id
  );
  return info_requested;
};
//Get info on RAM
module.exports.getRAM = async (data) => {
  const info_requested = await RAM.findOne({
    where: { name: data },
  }).then((res) => res.id);
  return info_requested;
};

//Get info on Storage
module.exports.getStorage = (data) => {
  const info_requested = Storage.findOne({ where: { name: data } }).then(
    (res) => {
      console.log(res);
      return res.id;
    }
  );
  return info_requested;
};
// Get info on User with parameter
module.exports.getUser = async (data) => {
  const info_requested = await Users.findOne({ where: { name: data } }).then(
    (res) => res.id
  );
  return info_requested;
};
// Get info on category with parameter
module.exports.getCategory = async (data) => {
  const info_requested = await Category.findOne({
    where: { Tag_Description: data },
  }).then((res) => res.Tag_id);
  return info_requested;
};
