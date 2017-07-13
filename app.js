const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/vendamatic')

app.use(bodyParser.json())
app.use(router)

app.listen(3000, function() {
  console.log('╱╱┏╮');
  console.log('╱╱┃┃');
  console.log('▉━╯┗━╮');
  console.log('▉┈┈┈┈┃');
  console.log('▉╮┈┈┈┃');
  console.log('╱╰━━━╯');
})

module.exports = app;
