const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  database: 'products',
  user: 'Sasha',
  password: '',
});
client.connect()
  .then(() => {
    // console.log('connected');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
