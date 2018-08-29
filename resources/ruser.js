var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken');
var dbasync = require('../db/dbasync');
var ref = require('../shared/referensi');


router.post('/login/', async function (req, res) {
    let encryptedPass = ref.cipherPassword(req.body.password);
    let userid = "'" + req.body.userid + "'";
    let password = "'" + encryptedPass + "'";

    try {
        let SQL = `SELECT * FROM t_pass a WHERE a.userid=` + userid + ` AND a.password=` + password;
        let nil = await dbasync.myexec(SQL);
        var adaUser = nil.length;
        if (adaUser == 0) {
            res.status(200).send([
                {
                    "token": "kosong",
                }]
            );
            return;
        }

        siduser = nil[0].iduser;
        snama = nil[0].nama;
        shak = nil[0].hak;
        skdsatker = nil[0].kdsatker;
        skdanak = nil[0].skdanak;
        skdsubanak = nil[0].skdsubanak;

        var token = jwt.sign(
            {
                iss: 'Aplikasi SPPD',
                iduser: siduser,
                nama: snama,
                hak: shak,
                kdsatker: skdsatker,
            }, 'aplikasiSPPDdiawaliolehKementerianPU1243%%%3433e2&&**@#$');
        res.status(200).send([
            {
                "token": token,
                "userid": siduser,
                "nama": snama,
                "hak": shak,
                "kdsatker": skdsatker,

            }]
        );
    } catch (error) {
        res.status(400).json({
            error: "true",
            code: "09",
            message: "Error Query"+ error
        })
    }
})
module.exports = router
