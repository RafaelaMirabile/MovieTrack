import { QueryResult } from "pg";
import connection from "../database/database.js";
import * as movieProtocols from "../protocols/movieProtocols.js";

export async function insertMovie(movie: movieProtocols.Movie) {
    const result = connection.query(`INSERT INTO movies (title,banner,genre) VALUES ($1,$2,$3);`, [movie.title, movie.banner, movie.genre]);
    return result;
};

export async function findMovie(movie: movieProtocols.Movie): Promise<QueryResult<movieProtocols.Movie>> {
    return connection.query(`SELECT title FROM movies WHERE title=$1;`, [movie.title]);
};

export async function moviesList(): Promise<QueryResult<movieProtocols.Movie>> {
    return connection.query(`SELECT * FROM movies;`);
};

export async function updateReview(id: string, newReview: movieProtocols.Review) {
    return connection.query(`UPDATE movies SET review=$1 WHERE id=$2;`, [newReview.review, id]);
};

export function updateRate(id: string, newRate: movieProtocols.Rate) {
    return connection.query(`UPDATE movies SET rate=$1 WHERE id=$2`, [newRate.rate, id]);
}

