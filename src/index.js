//This my server
var express = require('express');

var socket = require('socket.io');

var http = require('http');

require('./dbProvider/mogoDb');

const movieRoute = require('./routes');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(bodyParser.json({limit: '50mb', extended: true}))
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

var server = http.createServer(app);

server.listen(3001);

app.use(movieRoute);
