const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  `mongodb+srv://sagar:sagar@warehouse.odyaf.mongodb.net/uvXcel?retryWrites=true&w=majority
  `
);

app.use("/", require("./routes/jobRoutes"));
app.use("/", require("./routes/subscriberRoutes"));
app.use("/", require("./routes/userRoutes"));
app.use("/", require("./routes/resourceRoutes"));

const PORT = process.env.PORT || 5004;

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(PORT, function () {
  console.log(`server running on port ${PORT}`);
});
