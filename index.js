const express = require("express");
const mongoose = require("mongoose");
const peopleRouter = require("./routers/people");

const url = "mongodb://localhost:27017/MyDB";

const app = express();

app.use("/people", peopleRouter);
app.use(express.json());

app.listen(9000, () => {
  console.log("Server started");
});

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
