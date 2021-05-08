const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const sequelize = require("./Controller/Connection");
const session = require("./Controller/Session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());

app.use(cors());

//using sessions
app.set("trust proxy", 1);
app.use(session);
app.use(cookieParser());

app.use("/", require("./Router/Route"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
}

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => console.log(`Error ` + err));
