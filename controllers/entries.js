const Entry = require("../models/Entry");
const entrySchema = require('../config/validator');

module.exports = {
    createEntry: async (req, res) => {
        console.log(req.body)
        const { error, value } = entrySchema.validate(req.body);
        if(error) {
            console.log(error)
        }else {
            try {
                Entry.create({
                    user: req.user.id,
                    ...value,
                })
            }catch(e) {
                console.log(e)
            } 
        }
        res.redirect("/entry")
    },
    getEntryPage: async (req, res) => {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = today.toLocaleDateString('en-US', options);
        const greeting = `Today is ${dateString}`;
        const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry']
        res.render("entry.ejs", { greeting, moods })
    }
}