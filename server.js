const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());

// database setup
mongoose.connect('mongodb://localhost/collabot')
.then(()=> console.log('Connected to MongoDB...'))
.catch(err => console.error('Not Connected...'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));