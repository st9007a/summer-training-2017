var bodyParser = require('body-parser')
var express = require('express')
var app = express()

app.listen(12345)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.get('/get-data', function(req, res) {
  res.send('[GET] Hello, ' + req.query.username)
})

app.post('/post-data', function(req, res) {
  res.send('[POST] Hello, ' + req.body.username)
})
