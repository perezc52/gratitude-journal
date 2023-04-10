const Joi = require('joi');

const entrySchema = Joi.object({
  goodThing: Joi.string(),
  positiveAccomplishment: Joi.string(),
  mood: Joi.string().valid('Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry'),
  madeYouSmile: Joi.string(),
  lookingForwardTo: Joi.string(),
  proudOfYourself: Joi.string(),
  thoughtsReflections: Joi.string(),
});

module.exports = entrySchema;