'use strict';

let express = require('express'),
app = express(),
config = require('./config/config.js'),
server,
fileCtrl = require('./controllers/file.server.controller.js');

app.set('view engine', 'ejs');

app.post('/upload', fileCtrl.processFile, fileCtrl.sendFileSize);
app.use('/', fileCtrl.renderFileForm);

server = app.listen(config.port);
console.log('Server is listening on', config.port);