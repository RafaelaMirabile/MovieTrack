import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { deleteMovie, getMovies, insertOne, moviesWithSameGenre, updateRate, writeReview } from './controllers/movieController.js';
import { validateMovie, validateRate, validateReview } from './middleware/validation.js';

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', getMovies);
server.put('/:movieId', validateRate,updateRate); 
server.delete('/:movieId',deleteMovie); 

server.post('/addMovie',validateMovie,insertOne);

server.put('/writeReview/:movieId',validateReview,writeReview); 

server.get('/listMovies',moviesWithSameGenre); 

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

