var express = require('express')
var cors = require('cors')
var path = require('path')
var app = express()
 
var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
}

app.use(cors(corsOptions))
app.get('/users/ohde-sg/repos', function (req, res, next) {
  res.json(require(path.resolve('github-ohde-sg-repos')).default)
})
 
app.listen(1919, function () {
  console.log('CORS-enabled web server listening on port 1919')
})
