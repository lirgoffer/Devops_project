const express = require('express');
const path = require('path');
const app = express();

const mongoose = require("mongoose");
const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect('mongodb+srv://lirg177:Lr220520@cluster0.hajlzup.mongodb.net/mongodb?retryWrites=true&w=majority'
       
            , connectionParams
        )
        console.log("database connected");


    } catch (error) {
        console.log('error')
        
    }
}

database();

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
