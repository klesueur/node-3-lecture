UPDATE movies 
SET title = $2, poster_img = $3, year = $4
WHERE id = $1
returning *;