'use strict';

let multer = require('multer'),
fs = require('fs'),
upload = multer({
  dest: 'uploads/'
}),
Promise = require('bluebird');

exports.processFile = (req, res, next) => {
  let fileUpload = Promise.promisify(upload.single('userfile')),
  removeFile = Promise.promisify(fs.unlink);

  fileUpload(req, res)
  .then(() => {
    return removeFile('./uploads/' + req.file.filename);
  })
  .then(() => {
    next();
  })
  .catch(err => {
    res.send(err);
  });
}

exports.sendFileSize = (req, res, next) => {
  res.send({
    size: req.file.size
  });
}

exports.renderFileForm = (req, res) => {
  res.render('../views/pages/index');
}
