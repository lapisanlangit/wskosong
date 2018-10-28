const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dgpegawai',
  password: 'root',
  port: 5432,
})

module.exports= pool;
