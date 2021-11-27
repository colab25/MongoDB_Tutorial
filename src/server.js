import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/userRouter';

import config from './config/key';

const app = express();
const PORT = 8080;

const server = async () => {
  try {
    await mongoose
      .connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log('MongoDB Connected...'))
      .catch(err => console.log(err));

    mongoose.set('debug', true);

    app.use(express.json());
    app.use('/user', userRouter);

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
