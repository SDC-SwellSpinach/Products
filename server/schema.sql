DROP TABLE features;
DROP TABLE related;
DROP TABLE photos;
DROP TABLE skus;
DROP TABLE styles;
DROP TABLE products;



CREATE TABLE products(
  id serial PRIMARY KEY,
  "name" VARCHAR(255),
  slogan text,
  "description" text,
  category VARCHAR(200),
  default_price VARCHAR(20)
);

CREATE TABLE features(
  id serial PRIMARY KEY,
  product_id INT REFERENCES products (id),
  feature VARCHAR(50),
  "value" VARCHAR(100)
);

CREATE TABLE related (
  id serial PRIMARY KEY,
  current_product_id INT REFERENCES products (id),
  related_product_id INT
);

CREATE TABLE styles (
  style_id serial PRIMARY KEY,
  productId INT REFERENCES products (id),
  "name" VARCHAR(255),
  sale_price VARCHAR(20),
  original_price VARCHAR(20),
  "default?" BOOLEAN
);

CREATE TABLE photos(
  id serial PRIMARY KEY,
  styleId INT REFERENCES styles (style_id),
  "url" text,
  thumbnail_url text
);

CREATE TABLE skus (
  id serial PRIMARY KEY,
  style_id INT REFERENCES styles (style_id),
  size VARCHAR(10),
  quantity INT
);

-- DROP DATABASE IF EXISTS products;

-- CREATE DATABASE products;

-- USE products;

-- DROP DATABASE products;
-- CREATE DATABASE products;

-- \c products