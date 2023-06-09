const { Pool } = require('pg');
require('dotenv').config();

console.log(process.env.DB_USER);

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

// const { Client } = require('pg');
// require('dotenv').config();

// console.log(process.env.DB_USER);

// const client = new Client({
//   host: process.env.HOST,
//   database: 'products',
//   user: process.env.DB_USER,
//   password: process.env.PASSWORD,
// });
// client.connect()
//   .then(() => {
//     console.log('connected');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// module.exports = client;
