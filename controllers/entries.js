const Entry = require("../models/Entry");
const entrySchema = require('../config/validator');
const moment = require('moment');

module.exports = {
    deleteEntry: async (req, res) => {
        try {
            await Entry.findByIdAndDelete(req.params.id)
            const response = { message: 'Entry deleted successfully' };
            res.json(response);
        } catch(e) {
            console.log(e)
        }
    },
    editEntry: async(req, res) => {
        try {
            const updatedData = req.body
            await Entry.findByIdAndUpdate(req.params.id, updatedData);
            res.redirect('/entry')
        } catch(e) {
            console.log(e)
        }
    },
    getEditEntryPage: async (req, res,) => {
        try {
            const entry = await Entry.findById(req.params.id)
            const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry']
            res.render("editEntry.ejs", {entry, moods})
        }catch(e) {
            console.log(e)
        }
    },
    createEntry: async (req, res) => {
        const { error, value } = entrySchema.validate(req.body);
        if(error) {
            console.log(error)
        }else {
            try {
                Entry.create({
                    user: req.user.id,
                    ...value,
                })
                res.redirect("/entry")
            }catch(e) {
                console.log(e)
            } 
        }
    },
    getViewEntry: async (req, res) => {
        try {
            const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry']
            const entry = await Entry.findById(req.params.id)
            res.render("viewEntry.ejs", {entry, moods})
        }catch(e) {
            console.log(e)
        }
    },
    getEntryPage: async (req, res) => {
        try {
            const today = moment().startOf('day').format('MMMM D, YYYY');
            const currentHour = moment().hours();
            if (currentHour < 12) {
                greeting = `Good morning, ${req.user.userName}!`
              } else if (currentHour < 18) {
                greeting = `Good afternoon, ${req.user.userName}!`
              } else {
                greeting = `Good evening, ${req.user.userName}!`
              }
            const todaysEntryExists = await Entry.exists({ user: req.user.id, createdOn: today });
            console.log(todaysEntryExists)
            const dateGreeting = `Today is ${today}`;
            const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry']
            res.render("entry.ejs", { greeting, dateGreeting, moods, todaysEntryExists })
        }catch(e) {
            console.log(e)
        }
    },
    getAboutPage: async (req, res) => {
        res.render("about.ejs")
    },
    getLogsPage: async (req, res) => {
        try {
            const allUserEntries = await Entry.find({user: req.user.id})
            console.log(allUserEntries)
            res.render("logs.ejs", {allUserEntries})
        }catch(e) {
            console.log(e)
        }
    },
}