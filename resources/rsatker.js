var express = require('express')
var router = express.Router()
var dbasync = require('../db/dbasync');
var base = require('../shared/base');

router.get('/getSatker/', async function (req, res) {
    try {
      let SQL = `SELECT * FROM t_satker`;
      let queryResult = await dbasync.myexec(SQL);
      res.status(200).json(queryResult);
    } catch (error) {
      res.status(400).json({
        error: "true",
        code: "99",
        message: "Error Query" 
      })
    }
  })
  
module.exports=router;




