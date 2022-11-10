import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { deleteMovie, getMovies, insertOne, moviesWithSameGenre, updateRate, writeReview } from './controllers/movieController.js';
var server = express();
server.use(cors());
server.use(express.json());
server.get('/', getMovies);
server.put('/:movieId', updateRate);
server["delete"]('/:movieId', deleteMovie);
server.post('/addMovie', insertOne);
server.put('/writeReview/:movieId', writeReview);
server.get('/listMovies', moviesWithSameGenre);
server.listen(process.env.PORT || 5000, function () {
    console.log("Server listening on port ".concat(process.env.PORT));
});
