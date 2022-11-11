import * as schemas from "../schemas/movieSchema.js";
export function validateMovie(req, res, next) {
    var newMovie = req.body;
    var error = schemas.movieSchema.validate(newMovie).error;
    if (error) {
        console.log(error);
        return res.status(422).send(error.details.map(function (value) { return value.message; }));
    }
    next();
}
;
export function validateReview(req, res, next) {
    var newReview = req.body;
    var error = schemas.movieReviewSchema.validate(newReview).error;
    if (error) {
        return res.status(422).send(error.details.map(function (value) { return value.message; }));
    }
    next();
}
;
export function validateRate(req, res, next) {
    var newRate = req.body;
    var error = schemas.movieRateSchema.validate(newRate).error;
    if (error) {
        return res.status(422).send(error.details.map(function (value) { return value.message; }));
    }
    next();
}
;
