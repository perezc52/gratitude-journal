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
        const currentHour = moment().hours();
        if (currentHour < 12) {
            greeting = `Good morning, ${req.user.userName}!`
          } else if (currentHour < 18) {
            greeting = `Good afternoon, ${req.user.userName}!`
          } else {
            greeting = `Good evening, ${req.user.userName}!`
          }
        // const todaysEntryExists = await Entry.exists({ user: req.user.id, createdOn: today });
        console.log(req.user)
        const todaysEntryExists = false
        const dateGreeting = `Today is ${today}`;
        const messages = req.flash();
        const moods = ['Happy', 'Grateful', 'Excited', 'Content', 'Calm', 'Focused', 'Tired', 'Stressed', 'Overwhelmed', 'Sad', 'Anxious', 'Angry']
        res.render("entry.ejs", { greeting, dateGreeting, moods, messages, todaysEntryExists })
    },
    getAboutPage: async (req, res) => {
        res.render("about.ejs")
    },
    getCalendarPage: async (req, res) => {
        res.render("calendar.ejs")
    }
}