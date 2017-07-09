const express = require('express')
const app = express()

app.listen(12345)

app.get('/', function(req, res) {
  res.send('Hello')
})
