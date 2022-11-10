import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { deleteMovie, getMovies, insertOne, updateRate, writeReview } from './controllers/movieController.js';

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', getMovies);
server.put('/:movieId', updateRate);
server.delete('/:movieId',deleteMovie);

server.post('/addMovie', insertOne);

server.put('/writeReview/:movieId', writeReview);

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

