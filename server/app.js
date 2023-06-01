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

app.use('/products', controller);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

module.exports = app;
