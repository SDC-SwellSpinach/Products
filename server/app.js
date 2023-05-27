require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const controller = require('./controllers');

const app = express();
app.use(morgan('dev'));

// These two middlewares work hand-in-hand with one another
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/products', controller);
const PORT = process.env.PORT || 3000; // <-- 8080 is also common
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

module.exports = app;
