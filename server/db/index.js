const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.HOST,
  database: 'products',
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
});
pool.connect()
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;
