const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const app = express();
const routes = require("./routes/notification");
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Hello world");
});

app.use("/", routes);
app.listen(port || 8001, () => {
  console.log("running on port 8000");
});
