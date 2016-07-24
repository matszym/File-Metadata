'use strict';

let multer = require('multer'),
upload = multer({
  dest: 'uploads/'
});

exports.processFile = upload.single('userFile');

exports.sendFileSize = (req, res, next) => {
  res.send(req.file);
}
