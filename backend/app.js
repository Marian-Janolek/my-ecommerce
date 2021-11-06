require('dotenv').config();
require('express-async-handler');
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// database
const connectDB = require('./db/connectDB.js');

// routers
const authRouter = require('./routes/authRoutes');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running .....');
});
app.get('/api/v1', (req, res) => {
  console.log(req.signedCookies);
  res.send('API is running .....');
});

app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
