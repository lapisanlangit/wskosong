var express = require('express')
var router = express.Router()
var dbasync = require('../db/dbasync');
var base = require('../shared/base');

router.get('/getKPPN/', async function (req, res) {
  try {
    let SQL = `SELECT kdkppn,nmkppn FROM t_kppn`;
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



router.post('/cekKppn', async function (req, res) {
  try {
    let queryResult = await dbasync.myexec('SELECT kdkppn FROM t_kppn WHERE kdkppn="' + req.body.kdkppn + '"');
    res.status(200).json(queryResult);
  } catch (error) {
    // console.log(error)
    res.status(400).json({
      error: "true",
      code: "09",
      message: "Error Query",
    })
  }
});

router.post('/saveKppn', async function (req, res) {
  try {
    let SQL = `INSERT INTO t_kppn(kdkppn,nmkppn) VALUES("` + req.body.kdkppn + `","` + req.body.nmkppn + `")`
    let queryResult = await dbasync.myexec(SQL);
    res.status(200).json(  {
      error:"false",
      code:"99",
      message:"Save KPPN",
      })
  } catch (error) {

    res.status(400).json({
      error: "true",
      code: "09",
      message: "Error Query",
    })
  }
});



router.post('/updateKppn',async function (req, res) {
  try {
  let SQL=`UPDATE t_kppn SET nmkppn="`+req.body.nmkppn+`" WHERE kdkppn="`+req.body.kdkppn+`"`
  let queryResult=await dbasync.myexec(SQL);
  res.status(200).json(  {
    error:"false",
    code:"99",
    message:"Update KPPN",
    })
} catch (error) {

  res.status(400).json(  {
      error:"true",
      code:"09",
      message:"Error Query",
      })
}
});


router.post('/hapusKppn',async function (req, res) {
  try {
  let SQL=`DELETE FROM t_kppn WHERE kdkppn="`+req.body.kdkppn+`"`
  let queryResult=await dbasync.myexec(SQL);
  res.status(200).json(  {
    error:"false",
    code:"99",
    message:"Hapus KPPN",
    })
} catch (error) {

  res.status(400).json(  {
      error:"true",
      code:"09",
      message:"Error Query",
      })
}
});
module.exports = router;




