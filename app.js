const express = require('express'); 
const morgan = require('morgan'); 
const userRoutes = require('./route/userRoutes')
const app = express()

app.use(express.json()); 
app.use(morgan('combined')); 
app.use('/users', userRoutes); 

module.exports = app; 