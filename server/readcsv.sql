\COPY products FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/server/csv/product.csv' DELIMITER ',' CSV HEADER;

\COPY styles FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/server/csv/styles.csv' WITH (FORMAT CSV, DELIMITER ',', HEADER, NULL 'null');

\COPY features FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/server/csv/features.csv' DELIMITER ',' CSV HEADER;

\COPY related FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/server/csv/related.csv' DELIMITER ',' CSV HEADER;

\COPY photos FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/server/csv/photos.csv' DELIMITER ',' CSV HEADER;

\COPY skus FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/server/csv/skus.csv' DELIMITER ',' CSV HEADER;

-- ALTER TABLE styles SET sale_price = '' WHERE sale_price = 'null';
UPDATE styles SET sale_price = '0' WHERE sale_price IS NULL;

INSERT INTO product_features (id, "name", slogan, "description", category, default_price, features)
SELECT products.id, "name", slogan, "description", category, default_price, jsonb_agg(jsonb_build_object('feature', features.feature, 'value', features.value)) AS features
FROM products
LEFT JOIN features ON products.id = features.product_id
GROUP BY products.id, products.name;

INSERT INTO related_products (current_product_id, related)
SELECT related.current_product_id, jsonb_agg(related.related_product_id) AS related
FROM related
GROUP BY related.current_product_id;

INSERT INTO style_photo_skus (style_id, productId, "name", sale_price, original_price, "default?", photos, skus)
SELECT styles.style_id, styles.productId, styles.name, original_price, sale_price, "default?",
COALESCE(jsonb_agg(jsonb_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url)) FILTER (WHERE photos.id IS NOT NULL), '[]') AS photos,
COALESCE(jsonb_object_agg(skus.id, jsonb_build_object('quantity', skus.quantity, 'size', skus.size)) FILTER (WHERE skus.id IS NOT NULL), '{}') AS skus
FROM styles
LEFT JOIN photos ON styles.style_id = photos.styleId
LEFT JOIN skus ON styles.style_id = skus.style_id
GROUP BY styles.style_id, styles.name;

CREATE INDEX product_features_id_hash_index ON product_features USING hash(id);
CREATE INDEX product_id_hash_index ON products USING hash(id);
CREATE INDEX related_products_id_hash_index ON related_products USING hash(current_product_id);
CREATE INDEX styles_id_hash_index ON style_photo_skus USING hash(productId);
