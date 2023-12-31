const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("client"));

const {
  loadPage
} = require('./controller')

app.get('/', loadPage)

app.listen(4000, console.log("server running on 4000"));
