module.exports = {
    getAllMovies: (req, res) => {
        const db = req.app.get('db')

        db.get_all_movies().then(movies => {
            res.status(200).send(movies)
        })
    },
    getMovieById: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.get_movie_by_id([id]).then(movie => {
            res.status(200).send(movie)
        })
    },
    addMovie: (req, res) => {
        const db = req.app.get('db')
        const {title, poster_img, year} = req.body

        db.add_movie([title, poster_img, year]).then(movie => {
            res.status(200).send(movie)
        })
    },
    editMovie: (req, res) => {
        const {id} = req.params
        const {title, poster_img, year} = req.body
        const db = req.app.get('db')

        db.edit_movie([id, title, poster_img, year]).then((movie) => {
            res.status(200).send(movie)
        })
    },
    deleteMovie: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_movie([id]).then(() => {
            res.sendStatus(200)
        })
    }
}