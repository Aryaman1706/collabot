const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

// get request -> get my profile with projects but without lead *
router.get('/me', auth, async(req, res)=>{
    const user = await User.findById(req.user._id)
    .populate('projects', 'title description');
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
    
    // find me
    let user = await User.findById(req.user._id)
    .select('-projects');
    
    // verify old password
    const validPassword = await bcrypt.compare(req.body.password, req.user.password);
    if ( !validateTask ) return res.status(400).send("Invaid");
    
    // change password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newPassword, salt);
    user = await user.save();

    res.json(user);
});

// -->