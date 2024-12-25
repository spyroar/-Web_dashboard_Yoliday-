const express = require("express");
require("dotenv").config();
const router = require("./routes/route");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();
app.get("/", (req, res) => {
  res.send("Apis are running for data Please use /data");
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/data", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
