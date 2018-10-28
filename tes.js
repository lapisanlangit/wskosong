// const sharp = require('sharp');

// sharp('dua.jpg')
//   .resize(1000, 1000)
//   .toFile('output2.jpg', function(err) {
//     // output.jpg is a 300 pixels wide and 200 pixels high image
//     // containing a scaled and cropped version of input.jpg
//   });

const db = require('./db/dbasyncpg')

async function satu(){
  const hasil=await db.pgexec('SELECT * from mastergaji.t_pegawai');

  console.log(hasil)

}

satu();


