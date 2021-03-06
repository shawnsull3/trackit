const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/dailylog/:username/all', async (req, res) => {
  try {
    const dailyLogs = await db.getAllDailyLogs(req.params.username);
    res.send(dailyLogs);
  } 
  catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.get('/dailylog/:username/', async (req, res) => {
  try {
    const dailyLog = await db.getTodaysLog(req.params.username);
    res.send(dailyLog);
  } 
  catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.post('/dailylog/', async (req, res) => {
//   req.body.date.setDate(req.body.date.getDate() - 8)
  try {
    await db.createDailyLog(req.body);
    res.sendStatus(201);
  } 
  catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.put('/dailylog/', async (req, res) => {
  try {
    await db.updateDailyLog(req.body);
    res.sendStatus(204);
  } 
  catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
console.log(`listening on port ${PORT}`);
});
