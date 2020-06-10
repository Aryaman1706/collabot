const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const auth = require('../middleware/auth');

const { User } = require('../model/user');

const router = express.Router();

// Requests -->

// get request -> get my profile
router.get('/me', auth, async(req, res)=>{
    const user = await User.findById(req.user._id);
    res.json(user);
});

// put request -> edit my profile
router.put('/me', auth, async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.user._id,{
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email
    },{new:true});

    res.json(user);
});

// put request -> change password
router.put('/changePass', auth, async(req, res)=>{
    // verify old password
    // change password
    // use bcrypt
});

// -->