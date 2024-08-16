import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Messages from "./models/Message.js";
import Cors from "cors"
dotenv.config();
const app = express();
app.use(express.json())
app.use(Cors())
const port = process.env.PORT || 9000;
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
mongoose
  .connect(process.env.MONG_DB)
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => {
    console.log(err);
  });
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
app.get("/messages/sync", (req, res) => {
  Messages.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
