var express = require('express')
var router = express.Router()
var db = require('../db/dbasyncpg');
var base = require('../shared/base');

router.get('/getPegawai/', async function (req, res) {
  
  try {
    let SQL = `SELECT * from mastergaji.t_pegawai WHERE nip=`+req.query.nip;
    let queryResult = await db.pgexec(SQL);
        // console.log(queryResult)
    res.status(200).json(queryResult.rows);
  } catch (error) {
    res.status(400).json({
      error: "true",
      code: "99",
      message: "Error Query "
    })
  }
})


router.post('/tambahPegawai/', async function (req, res) {  
  try {
    let SQL = `INSERT INTO mastergaji.t_pegawai(nip,nmpeg) VALUES('`+req.body.nip+`','`+req.body.nmpeg+`')`;
    let queryResult = await db.pgexec(SQL);
    res.status(200).json({
      error: "false",
      code: "00",
      message: "Berhasil ditambahkan "
    });
  } catch (error) {
    res.status(400).json({
      error: "true",
      code: "99",
      message: "Error Query "+error
    })
  }
})


module.exports = router;