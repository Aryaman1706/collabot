const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    maxlength: 10,
    default: null,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

function validateUser(user) {
  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string(),
    username: Joi.string().min(5).required(),
    phone: Joi.string().max(10),
    projects: Joi.array(),
  };

  return Joi.validate(user, schema);
}

// generate jwt
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      email: this.email,
      username: this.username,
      _id: this._id,
    },
    "key"
  );

  return token;
};

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.validateUser = validateUser;
