var express = require('express')
var router = express.Router()
var dbasync = require('../db/dbasync');
var base = require('../shared/base');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // console.log(file)
    cb(null, file.fieldname + '-' + Date.now())
  }
})

upload = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 } })

// image1= adalah nama field untuk upload
router.post('/uploadFile', upload.single('file'), function (req, err, res) {
  // console.log(req.stack)
  if (!req.file) {
    console.log("No file received");
    // res.status(400).json({
    //     error: "true",
    //     code: "09",
    //     message: "No Files"
    // })
  } else {
    console.log('file received');
    // res.status(200).json({
    //     error: "false",
    //     code: "09",
    //     message: "Success Upload"
    // })
  }
})

// router.post('/uploadFile', upload.single('file'), function (req, res, next) {
//     console.log(req)
//     if (req.file) {
//       console.dir(req.file);
//       console.log('Thank you for the file');
//     } else {
//       console.log('Missing file');
//     }
    
//   });
  



module.exports = router
