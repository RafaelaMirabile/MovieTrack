import { Response, Request } from "express";
import * as movieProtocols from '../protocols/movieProtocols.js'
import * as movieRepository from '../repositories/movieRepository.js'

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = await movieRepository.moviesList();
        return res.status(200).send(movies.rows);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export async function insertOne(req: Request, res: Response) {
    const newMovie = req.body as movieProtocols.Movie;
    const findMovie = await movieRepository.findMovie(newMovie);

    if (findMovie.rowCount === 1) {
        return res.status(409).send('Movie already registered');
    }
    try {
        const result = await movieRepository.insertMovie(newMovie);
        return res.status(201).send(`Movie inserted ${result.rowCount}`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export async function writeReview(req: Request, res: Response) {
    const id = req.params.movieId as string;
    const newReview = req.body as movieProtocols.Review;
    try {
        await movieRepository.updateReview(id, newReview);
        return res.status(200).send(`review updated successfully`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export async function updateRate(req: Request, res: Response) {
    const id = req.params.movieId as string;
    const newRate = req.body as movieProtocols.Rate;
    try {
        await movieRepository.updateRate(id, newRate);
        return res.status(200).send(`rate updated successfully`);

    } catch (error) {
        console.log(error);
        return res.sendStatus(5000);
    }
};
