import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getMovies, insertOne, updateRate, writeReview } from './controllers/movieController.js';
var server = express();
server.use(cors());
server.use(express.json());
server.get('/', getMovies);
server.put('/:movieId', updateRate);
server.post('/addMovie', insertOne);
server.put('/writeReview/:movieId', writeReview);
server.listen(process.env.PORT || 5000, function () {
    console.log("Server listening on port ".concat(process.env.PORT));
});
