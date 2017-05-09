DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL primary key,
  first VARCHAR(255) not null,
  last VARCHAR(255) not null,
  email VARCHAR(255) not null,
  password VARCHAR(255) not null,
  image VARCHAR(255),
  bio TEXT,
  region VARCHAR(255)
);
