const express = require("express");
const router = express.Router();

//Basic Get Route
router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
