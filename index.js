const app = require('./server');

const mongoose = require('mongoose');

const gradesRouter = require('./routes/grades_route');

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

const port = process.env.PORT || 3000;
app.listen(port, () => (
  console.log('Server started!')
));
