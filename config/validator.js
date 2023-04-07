const Joi = require('joi');

const entrySchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  mood: Joi.string().valid('happy', 'sad', 'neutral'),
  date: Joi.date().required(),
});

module.exports = entrySchema;