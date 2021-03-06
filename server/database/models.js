var mongoose = require('mongoose');

const dailyLogSchema = mongoose.Schema({
    username: String,
    date: Date,
    notes: String,
    creativeHours: Number,
    subjectiveFeel: Number,
    read: Boolean,
    workout: Boolean,
    sleep: Number,
});

const DailyLog = mongoose.model('dailyLogs', dailyLogSchema, 'dailyLogs');

module.exports = DailyLog;