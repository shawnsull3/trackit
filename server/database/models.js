var mongoose = require('mongoose');

const dailyLogSchema = mongoose.Schema({
    username: String,
    notes: String,
    creativeHours: Number,
    subjectiveFeel: Number,
    read: Boolean,
    workout: Boolean,
    sleep: Number,
});

const DailyLog = mongoose.model('DailyLog', dailyLogSchema, 'dailyLog');

module.exports = DailyLog;