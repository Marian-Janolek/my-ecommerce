require('dotenv').config();
require('express-async-handler');
const express = require('express');
const app = express();

const connectDB = require('./db/connectDB.js');

app.use('/', (req, res) => {
  res.send('API is running .....');
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
