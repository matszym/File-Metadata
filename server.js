'use strict';

let express = require('express'),
app = express(),
config = require('./config/config.js'),
server,
fileCtrl = require('./controllers/file.server.controller.js');

app.use('/upload', fileCtrl.processFile, fileCtrl.sendFileSize);

server = app.listen(config.port);
console.log('Server is listening on', config.port);