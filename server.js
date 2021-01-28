const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT | 4000;
const sequelize = require("./Controller/Connection");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());

app.use(cors());

//using sessions
app.use(
  session({
    name: "SAM",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
      sameSite: true,
      secure: false,
    },
  })
);
app.use(cookieParser());

app.use("/", require("./Router/Route"));

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => console.log(`Error ` + err));
