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


CREATE TABLE user00_20170512(
    time timestamp,
    userid VARCHAR(255) REFERENCES users (id) not null,
    id SERIAL primary key,
    voca VARCHAR(255),
    meaning TEXT,
    cnt INTEGER,
    checked BOOLEAN
);
