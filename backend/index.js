import express, { request, response } from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import { mongooseURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const PORT = 5555;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", booksRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Course!");
});

mongoose
  .connect(mongooseURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
