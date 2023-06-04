const express = require('express');

const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const gradesRouter = require('./routes/grades_route');

app.use(bodyParser.urlencoded({ extended: true, limit: 'lmb' }));
app.use(bodyParser.json());

app.use('/grades', gradesRouter);

const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(
      'mongodb+srv://lirg177:Lr220520@cluster0.hajlzup.mongodb.net/mongodb?retryWrites=true&w=majority',
      connectionParams,
    );
    console.log('database connected');
  } catch (error) {
    console.log('error');
  }
};

module.exports = database;

database();

app.post('/grades', (req, res) => {
  const {
    name, exam1, exam2, exam3,
  } = req.body;
  database.storeRegistration(name, exam1, exam2, exam3);
  res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => (
  res.sendFile(path.join(__dirname, 'html', 'page.html'))
));

app.get('/', (req, res) => (
  res.send('Hello')
));
app.get('/test', (req, res) => (
  res.send('test hello')
));

module.exports = app;
