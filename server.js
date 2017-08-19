'use strict'

const express = require('express')
const app = express()
const dateConverter = require('./lib/dateConverter.js')

app.use('/public', express.static(process.cwd() + '/public'))

// Render Home Page
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

// Unix Timestamp API
app.get(/\d{10}/, function (req, res) {
  res.send(dateConverter.convertUnixToNatural(req.url))
})
// Natuaral Language Date API
app.get(/(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)(%20)\d{1,2},(%20)\d{4}/, function (req, res) {
  res.send(dateConverter.convertNaturalToUnix(req.url))
})

// All else, respond with null values
app.use(function (req, res, next) {
  res.send({'unix': null, 'natural': null})
})

// Error Middleware
app.use(function (err, req, res, next) {
  if (err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR')
  }
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening on port ' + process.env.PORT)
})
