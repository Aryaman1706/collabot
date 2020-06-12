const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());

// importing routes
const user = require('./routes/user');
const project = require('./routes/project');
const task = require('./routes/task');
const auth = require('./routes/auth');

// Routes
app.use('/api/user', user);
app.use('/api/project', project);
app.use('/api/task', task);
app.use('/api/auth', auth);

// database setup
mongoose.connect('mongodb://localhost/collabot')
.then(()=> console.log('Connected to MongoDB...'))
.catch(err => console.error('Not Connected...'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));