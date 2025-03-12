import Joi from "joi";

export const addBookValidator = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  yearPublished: Joi.number().integer().required(),
  description: Joi.string().required(),
  pages: Joi.string().required(),
  image: Joi.string()
});