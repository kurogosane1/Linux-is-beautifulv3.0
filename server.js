const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT | 4000;
const sequelize = require("./Controller/Connection");

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/", require("./Router/Route"));

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => console.log(`Error ` + err));
