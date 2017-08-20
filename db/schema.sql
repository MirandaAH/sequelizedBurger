USE jfyplp18on1l0kzx;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN,
  date date,
  PRIMARY KEY(id)
);

CREATE TABLE customers (
customer_name VARCHAR(200)NOT NULL
);