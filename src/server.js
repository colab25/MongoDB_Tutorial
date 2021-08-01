import express from "express";
import mongoose from "mongoose";
import config from "./config/key";

const PORT = 4000;
const app = express();

const users = [];

const server = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");

    app.use(express.json());

    app.get("/user", function (req, res) {
      return res.send({ users: users });
    });

    app.post("/user", function (req, res) {
      users.push({ name: req.body.name, age: req.body.age });
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
