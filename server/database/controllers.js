const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trackit', { useNewUrlParser: true, useUnifiedTopology: true });
const DailyLog = require('./models');

const db = mongoose.connection;

// May want to have this called automatically at 12:01 am
// or could do it on app opening
// then have users update each field 
const createDailyLog = async (dailyLog) => {
  try {
    const newDailyLog = new DailyLog(dailyLog);
    await newDailyLog.save();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const getDailyLog = async (username) => {
  console.log(username);
  return await DailyLog.find({ username: username });
}


db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = {
  createDailyLog,
  getDailyLog
}