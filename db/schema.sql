USE rx1h33ww1qgodymx;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN,
  date date,
  PRIMARY KEY(id)
);

