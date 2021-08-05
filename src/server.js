import express from "express";
import mongoose from "mongoose";
import config from "./config/key";
import { userRouter } from "./routes/userRoute";

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

    app.use("/user", userRouter);

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
