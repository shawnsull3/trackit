var mongoose = require('mongoose');

const dailyLogSchema = mongoose.Schema({
    notes: String,
    creativeHours: Number,
    subjectiveFeel: Number,
    read: Boolean,
    workout: Boolean,
    sleep: Number,
});

const dailyLog = mongoose.model('dailyLog', dailyLogSchema);

module.exports = dailyLog;