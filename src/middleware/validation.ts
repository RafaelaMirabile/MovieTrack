import { Response, Request,NextFunction } from "express";
import * as movieProtocols from '../protocols/movieProtocols.js'
import * as  schemas from "../schemas/movieSchema.js";

 export function validateMovie(req:Request,res:Response,next:NextFunction){
    const newMovie = req.body as movieProtocols.Movie;
    const {error} = schemas.movieRateSchema.validate(newMovie);
    if(error){
        return res.status(422).send(error.details.map(value=> value.message));
    }
    next();
};

export function validateReview(req:Request,res:Response,next:NextFunction){
    const newReview = req.body as string;
    const {error} = schemas.movieReviewSchema.validate(newReview);
    if(error){
        return res.status(422).send(error.details.map(value=> value.message));
    }
    next();
};

export function validateRate(req:Request,res:Response,next:NextFunction){
    const newRate = req.body as number;
    const {error} = schemas.movieRateSchema.validate(newRate);
    if(error){
        return res.status(422).send(error.details.map(value=> value.message));
    }
    next();
};
 