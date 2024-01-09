

const express = require("express");
const app = express();
const port =  5000;

const cors = require("cors");

const cookieParser = require("cookie-parser");

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/", (req, res) => {
  return  res.send("server running");
});

app.post("/auction", (req, res) => {
   return res.send("welcome to auction");
});

app.listen(port, () => {
  console.log("server is running on port" + " " + port);
});
