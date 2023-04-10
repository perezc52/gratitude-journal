const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  goodThing: {
    type: String,
    required: true
  },
  positiveAccomplishment: {
    type: String,
    required: true
  },
  mood: {
    type: [String],
    enum: ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry'],
    default: ['Happy']
  },
  madeYouSmile: {
    type: String,
    required: true
  },
  lookingForwardTo: {
    type: String,
    required: true
  },
  proudOfYourself: {
    type: String,
    required: true
  },
  thoughtsReflections: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
});

const Entry = mongoose.model('Entry', journalEntrySchema);

module.exports = Entry;
