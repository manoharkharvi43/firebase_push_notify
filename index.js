const express = require("express");

const port = require("dotenv").config();
const app = express();
const routes = require("./routes/notification");
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Hello world");
});

app.use("/", routes);
app.listen(process.env.PORT || 8000, () => {
  console.log("running on port 8000");
});
