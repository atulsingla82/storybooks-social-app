const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

//load passport
require('./config/passport')(passport) 

//load routes
const auth = require('./routes/auth');

//use routes
app.use('/auth' , auth);

app.get('/' , (req, res) => {
  
  res.send('it works')

})

const port = process.env.PORT || 5000;


app.listen(port , () => {
  
console.log(`Server is LIVE on Port ${port}`)

});