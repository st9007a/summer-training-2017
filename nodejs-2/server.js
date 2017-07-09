const express = require('express')
const app = express()

app.listen(12345)

app.use(express.static(__dirname + '/public'))
