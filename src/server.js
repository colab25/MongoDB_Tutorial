import express from 'express';
import mongoose from 'mongoose';

import config from './config/key';

const app = express();
const PORT = 8080;

const server = async () => {
  try {
    await mongoose
      .connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB Connected...'))
      .catch(err => console.log(err));
    app.use(express.json());

    app.get('/user', (req, res) => {
      return res.send({ users: users });
    });

    app.post('/user', (req, res) => {
      const { name, age } = req.body;
      users.push({ name, age });
      return res.send({ success: true });
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
