CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300),
    poster_img TEXT,
    year INT
 );

INSERT INTO movies (title, poster_img, year)
VALUES ('Tenat', 'apsoduivnaipuwernf', 2020);