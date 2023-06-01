require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const controller = require('./controllers');

const app = express();
app.use(cors());
app.use(morgan('dev'));

// These two middlewares work hand-in-hand with one another
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// loader.io verification
app.get('/loaderio-b89f317e87a9bf2db4aeea0fe503b8f2', (req, res) => (res.status(200).send('loaderio-b89f317e87a9bf2db4aeea0fe503b8f2')));

app.use('/products', controller);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

module.exports = app;
