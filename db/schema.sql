-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL,
    stock INT NOT NULL,
    category_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id)
    REFERENCES category(id)
    ON DELETE SET NULL
);

CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE producttag (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    tag_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    ON DELETE SET NULL,
    FOREIGN KEY (tag_id)
    REFERENCES tag(id)
    ON DELETE SET NULL
);

ALTER TABLE product ALTER COLUMN stock SET DEFAULT 10;

