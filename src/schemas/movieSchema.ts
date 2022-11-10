import Joi from "joi";

export const movieSchema = Joi.object({
    title: Joi.string().required(),
    banner: Joi.string().uri().required(),
    genre: Joi.string().required(),
    rate: Joi.number(),
    review: Joi.string()
});

export const movieReviewSchema = Joi.object({
    review: Joi.string().required()
});

export const movieRateSchema = Joi.object({
    "rate": Joi.number().required()
})