var path = require('path')
var express = require('express')
var cors = require('cors')
var passport = require('passport')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/auth', require('./routes/auth'))

module.exports = server
