const express = require('express'); //

const path = require('path'); //

const bodyParser = require('body-parser'); //

const app = express(); //

app.use(bodyParser.urlencoded({ extended: true, limit: 'lmb' }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'html'))); //

app.get('/', (req, res) => (
  res.sendFile(path.join(__dirname, 'html', 'page.html'))//
));

app.get('/', (req, res) => (
  res.send('Hello')
));
app.get('/test', (req, res) => (
  res.send('test hello')
));

module.exports = app; //
