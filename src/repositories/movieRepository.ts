import { QueryResult } from "pg";
import connection from "../database/database.js";
import * as movieProtocols from "../protocols/movieProtocols.js";

export async function insertMovie(movie: movieProtocols.Movie) {
    const result = connection.query(`INSERT INTO movies (title,banner,genre,review) VALUES ($1,$2,$3,$4);`, [movie.title, movie.banner, movie.genre,movie.review]);
    return result;
};

export async function findMovie(movie: movieProtocols.Movie): Promise<QueryResult<movieProtocols.MovieEntity>> {
    return connection.query(`SELECT title FROM movies WHERE title=$1;`, [movie.title]);
};

export async function moviesList(): Promise<QueryResult<movieProtocols.MovieEntity>> {
    return connection.query(`SELECT * FROM movies;`);
};

export async function updateReview(id: string, newReview:string) {
    return connection.query(`UPDATE movies SET review=$1 WHERE id=$2;`, [newReview, id]);
};

export async function updateRate(id: string, newRate: string) {
    return connection.query(`UPDATE movies SET rate=$1 WHERE id=$2`, [newRate, id]);
};

export async function deleteUniqueMovie(id :string){
    return connection.query(`DELETE FROM movies WHERE id=$1`,[id]);
};

export async function listSameGenreMovies(genre: string): Promise<QueryResult<movieProtocols.MovieEntity>>{
    return connection.query(`SELECT * FROM movies WHERE genre=$1`,[genre]);
}

export async function findMovieById(id: string){
    return connection.query(`SELECT * FROM movies WHERE id=$1`,[id]);

}


