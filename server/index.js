require('dotenv').config() 
const express = require('express')
const massive = require('massive')
const movieCtrl = require('./controllers/moviesController')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/movies', movieCtrl.getAllMovies)
app.get('/api/movies/:id', movieCtrl.getMovieById)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`I am alive!!!! ${SERVER_PORT}`))
}) 


