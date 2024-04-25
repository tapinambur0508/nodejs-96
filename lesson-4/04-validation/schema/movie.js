import Joi from "joi";

const movieSchema = Joi.object({
  title: Joi.string().required().min(3).max(15),
  producer: Joi.string().required(),
  year: Joi.number().required(),
});

export default movieSchema;
