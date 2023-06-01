const db = require('../db/index');

const getProducts = (page, count, callback) => {
  const offset = page * count - count;
  db.query(
    `SELECT * FROM products LIMIT ${count} OFFSET ${offset}`,
    (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    },
  );
};

const getProduct = (id, callback) => {
  db.query(
    `SELECT * FROM product_features
    WHERE product_features.id = ${id}`,
    (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    },
  );
};

const getStyles = (id, callback) => {
  db.query(
    `SELECT * FROM style_photo_skus
    WHERE style_photo_skus.productId = ${id}`,
    (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    },
  );
};

const getRelated = (id, callback) => {
  db.query(
    `SELECT * FROM related_products
    WHERE related_products.current_product_id = ${id}`,
    (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    },
  );
};

module.exports = {
  getProducts,
  getProduct,
  getStyles,
  getRelated,
};
