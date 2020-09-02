INSERT INTO movies (title, poster_img, year)
VALUES ($1, $2, $3)
returning *;