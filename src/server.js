import express from "express";
import mongoose from "mongoose";
import config from "./config/key";
import { User } from "./models/User";

const PORT = 4000;
const app = express();

const server = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected");

    app.use(express.json());

    app.get("/user", async (req, res) => {
      try {
        const users = await User.find({});
        return res.send({ users });
      } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
      }
    });

    app.get("/user/:userId", async (req, res) => {
      try {
        const { userId } = req.params;
        if (!mongoose.isValidObjectId(userId))
          return res.status(400).send({ err: "invalid userId" });
        const user = await User.findOne({ _id: userId });
        return res.send({ user });
      } catch (err) {
        return res.status(500).send({ err: err.message });
      }
    });

    app.post("/user", async (req, res) => {
      try {
        let { username, name } = req.body;
        if (!username)
          return res.status(400).send({ err: "username is required" });
        if (!name || !name.first || !name.last)
          return res
            .status(400)
            .send({ err: "Both first and last names are required" });
        const user = new User(req.body);
        await user.save();
        return res.send({ user });
      } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
      }
    });

    app.delete("/user/:userId", async (req, res) => {
      try {
        const { userId } = req.params;
        if (!mongoose.isValidObjectId(userId))
          return res.status(400).send({ err: "invalid userId" });
        const user = await User.findOneAndDelete({ _id: userId });
        return res.send({ user });
      } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
      }
    });

    app.put("/user/:userId", async (req, res) => {
      try {
        const { userId } = req.params;
        if (!mongoose.isValidObjectId(userId))
          return res.status(400).send({ err: "invalid userId" });
        const { age } = req.body;
        if (!age) return res.status(400).send({ err: "age is required" });
        if (typeof age !== "number")
          return res.status(400).send({ err: "age must be a number" });
        const user = await User.findByIdAndUpdate(
          userId,
          { $set: { age } },
          { new: true }
        );
        return res.send({ user });
      } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
