const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.get('/dailylog/', async (req, res) => {
  try {
    const dailyLog = await db.getDailyLog(req);
    res.send(dailyLog);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.post('/dailylog/', (req, res) => {
  return db.addToDailyLog(req)
    .then(results => res.sendStatus(201))
    .catch(error => console.log(error));
});

app.put('/dailylog/', (req, res) => {
    return db.updateDailyLog(req)
      .then(results => res.sendStatus(204))
      .catch(error => console.log(error));
  });

app.listen(PORT, () => {
console.log(`listening on port ${PORT}`);
});