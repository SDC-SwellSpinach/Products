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
app.get('/loaderio-5194118df6ea860d5233465797d7c31a', (req, res) => (res.status(200).send('loaderio-5194118df6ea860d5233465797d7c31a')));

// app.get('/loaderio-66b95c866bbb20cec52153138587786c', (req, res) => (res.status(200).send('loaderio-66b95c866bbb20cec52153138587786c')));

app.use('/products', controller);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

module.exports = app;
