var express = require('express')
var router = express.Router()
var dbasync = require('../db/dbasync');
var base = require('../shared/base');

router.get('/getSatker/', async function (req, res) {
  try {
    let SQL = `SELECT kdsatker,nmsatker FROM t_satker`;
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

router.get('/getDetailSatker/', async function (req, res) {
  try {
    let SQL = `SELECT * FROM t_satker WHERE kdsatker=`+req.query.kdsatker;
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



router.post('/cekSatker', async function (req, res) {
  try {
    let queryResult = await dbasync.myexec('SELECT kdsatker FROM t_satker WHERE kdsatker="' + req.body.kdsatker + '"');
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

router.post('/saveSatker', async function (req, res) {
  try {
    let SQL = `INSERT INTO t_satker(kdsatker,nmsatker) VALUES("` + req.body.kdsatker + `","` + req.body.nmsatker + `")`
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



router.post('/updateSatker',async function (req, res) {
  try {
  let SQL=`UPDATE t_satker SET nmsatker="`+req.body.nmsatker+`" WHERE kdsatker="`+req.body.kdsatker+`"`
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


router.post('/hapusSatker',async function (req, res) {
  try {
  let SQL=`DELETE FROM t_satker WHERE kdsatker="`+req.body.kdsatker+`"`
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




