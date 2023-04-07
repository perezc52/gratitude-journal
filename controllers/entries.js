const Entry = require("../models/Entry");
const entrySchema = require('../config/validator');

module.exports = {
    createEntry: async (req, res) => {
        console.log(req.body)
        res.send("hello from submit")
    },
    getEntryPage: async (req, res) => {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = today.toLocaleDateString('en-US', options);
        const greeting = `Today is ${dateString}`;
        const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Other']
        res.render("entry.ejs", { greeting, moods })
    }
}