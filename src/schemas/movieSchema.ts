import joi from "joi";

export const movieSchema = joi.object({
    title: joi.string().required(),
    banner: joi.string().required(),
    genre: joi.string().required(),
    review: joi.string(),
    rate: joi.number()
});

export const movieReviewSchema = joi.object({
    review: joi.string().required()
});

export const movieRateSchema = joi.object({
    rate: joi.number().required().min(0).max(10)
})