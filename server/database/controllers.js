const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');
import DailyLog from './models';

const db = mongoose.connection;

// May want to have this called automatically at 12:01 am
// then hve users update each field
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