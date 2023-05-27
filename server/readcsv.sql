\COPY products FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/product.csv' DELIMITER ',' CSV HEADER;

\COPY styles FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/styles.csv' WITH (FORMAT CSV, DELIMITER ',', HEADER, NULL 'null');

\COPY features FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/features.csv' DELIMITER ',' CSV HEADER;

\COPY related FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/related.csv' DELIMITER ',' CSV HEADER;

\COPY photos FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/photos.csv' DELIMITER ',' CSV HEADER;

\COPY skus FROM '/Users/Sasha/Desktop/Bootcamp/SDC/Products/skus.csv' DELIMITER ',' CSV HEADER;

-- ALTER TABLE styles SET sale_price = '' WHERE sale_price = 'null';
UPDATE styles SET sale_price = '0' WHERE sale_price IS NULL;