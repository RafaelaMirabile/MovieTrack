import joi from "joi";
export var movieSchema = joi.object({
    title: joi.string().required(),
    banner: joi.string().required(),
    genre: joi.string().required(),
    review: joi.string(),
    rate: joi.number()
});
export var movieReviewSchema = joi.object({
    review: joi.string().required()
});
export var movieRateSchema = joi.object({
    rate: joi.number().required()
});
