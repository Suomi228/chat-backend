import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
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

app.listen(port, () => console.log(`Listening on localhost: ${port}`));