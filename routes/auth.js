const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { User } = require("../model/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!bcrypt.compare(req.body.password, user.password))
    return res.send("Not valid...");
  const token = user.generateAuthToken();
  res.json({ token });
});

module.exports = router;
