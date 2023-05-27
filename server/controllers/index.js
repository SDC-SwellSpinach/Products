const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  models.getProducts((err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(data);
      res.status(200).send(data.rows);
    }
  });
});

router.get('/:id', (req, res) => {
  models.getProduct(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(data);
      res.status(200).send(data.rows);
    }
  });
});

router.get('/:id/styles', (req, res) => {
  models.getStyles(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(data);
      const result = {
        product_id: req.params.id,
        results: data.rows,
      };
      res.status(200).send(result);
    }
  });
});

router.get('/:id/related', (req, res) => {
  models.getRelated(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(data);
      res.status(200).send(data.rows[0].related);
    }
  });
});

module.exports = router;
