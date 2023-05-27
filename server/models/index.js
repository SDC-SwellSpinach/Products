const db = require('../db/index');

const getProducts = (callback) => {
  db.query(
    'SELECT * FROM products WHERE id = 1',
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
    `SELECT products.id, name, slogan, description, category, default_price,
    json_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features
    FROM products
    LEFT JOIN features ON products.id = features.product_id
    WHERE products.id = ${id}
    GROUP BY products.id, products.name`,
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
    `SELECT styles.style_id, styles.name, original_price, sale_price, "default?",
    json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url)) AS photos,
    json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size)) AS skus
    FROM products
    LEFT JOIN styles ON products.id = styles.productId
    LEFT JOIN photos ON styles.style_id = photos.styleId
    LEFT JOIN skus ON styles.style_id = skus.style_id
    WHERE products.id = ${id}
    GROUP BY styles.style_id, styles.name`,
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
    `SELECT json_agg(related.related_product_id) AS related
    FROM products
    LEFT JOIN related ON products.id = related.current_product_id
    WHERE products.id = ${id}
    GROUP BY products.id`,
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
