const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.set("useFindAndModify", false);
const auth = require("../middleware/auth");

const { User, validateUser } = require("../model/user");

const router = express.Router();

// Requests -->

// get request -> get my profile
// router.get('/me', auth, async(req, res)=>{
//     const user = await User.findById(req.user._id);
//     res.json(user);
// });

// get request -> get my profile with projects but without lead *
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).populate(
    "projects",
    "title description"
  );
  res.json(user);
});

// put request -> edit my profile
router.put("/me", auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
    },
    { new: true }
  );

  res.json(user);
});

// put request -> change password
router.put("/changePass/me", auth, async (req, res) => {
  // find me
  let user = await User.findById(req.user._id).select("-projects");

  // verify old password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid");

  // change password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.newPassword, salt);
  user = await user.save();

  res.json(user);
});

// post request -> create a user
router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(user);
});

// -->

module.exports = router;
