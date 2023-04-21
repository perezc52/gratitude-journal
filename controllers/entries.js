const Entry = require("../models/Entry");
const entrySchema = require('../config/validator');
const moment = require('moment');

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
        req.flash('success', 'Form submitted successfully!');
        res.redirect("/entry")
    },
    getEntryPage: async (req, res) => {
        const today = moment().startOf('day').format('MMMM D, YYYY');
        // const todaysEntryExists = await Entry.exists({ user: req.user.id, createdOn: today });
        const todaysEntryExists = false
        const greeting = `Today is ${today}`;
        const messages = req.flash();
        const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry']
        res.render("entry.ejs", { greeting, moods, messages, todaysEntryExists })
    }
}