// const express = require('express');
// const Redis = require('ioredis');
// const models = require('../models');

// const router = express.Router();
// const redis = new Redis();

// router.get('/', (req, res) => {
//   const page = req.body.page || 1;
//   const count = req.body.count || 5;
//   redis.get(`${page}_${count}`)
//     .then((result) => {
//       if (result) {
//         res.status(200).send(JSON.parse(result));
//       } else {
//         models.getProducts(page, count, (err, data) => {
//           if (err) {
//             console.log(err);
//             res.status(400).send(err);
//           } else {
//             res.status(200).send(data.rows);
//             redis.set(`${page}_${count}`, JSON.stringify(data.rows));
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// router.get('/:id', (req, res) => {
//   redis.get(req.params.id)
//     .then((result) => {
//       if (result) {
//         res.status(200).send(JSON.parse(result));
//       } else {
//         models.getProduct(req.params.id, (err, data) => {
//           if (err) {
//             console.log(err);
//             res.status(400).send(err);
//           } else {
//             res.status(200).send(data.rows);
//             redis.set(req.params.id, JSON.stringify(data.rows));
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// router.get('/:id/styles', (req, res) => {
//   redis.get(`styles_${req.params.id}`)
//     .then((result) => {
//       if (result) {
//         res.status(200).send(JSON.parse(result));
//       } else {
//         models.getStyles(req.params.id, (err, data) => {
//           if (err) {
//             console.log(err);
//             res.status(400).send(err);
//           } else {
//             const ans = {
//               product_id: req.params.id,
//               results: data.rows,
//             };
//             res.status(200).send(ans);
//             redis.set(`styles_${req.params.id}`, JSON.stringify(ans));
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// router.get('/:id/related', (req, res) => {
//   redis.get(`related_${req.params.id}`)
//     .then((result) => {
//       if (result) {
//         res.status(200).send(JSON.parse(result));
//       } else {
//         models.getRelated(req.params.id, (err, data) => {
//           if (err) {
//             console.log(err);
//             res.status(400).send(err);
//           } else {
//             res.status(200).send(data.rows[0].related);
//             redis.set(`related_${req.params.id}`, JSON.stringify(data.rows[0].related));
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// module.exports = router;

const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  const page = req.body.page || 1;
  const count = req.body.count || 5;
  models.getProducts(page, count, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
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
      const ans = {
        product_id: req.params.id,
        results: data.rows,
      };
      res.status(200).send(ans);
    }
  });
});

router.get('/:id/related', (req, res) => {
  models.getRelated(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(data.rows[0].related);
    }
  });
});

module.exports = router;
