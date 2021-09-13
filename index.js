const express = require("express");

const app = express();
const port = 3000;

const addVideo = require("./addVideo");

app.use(express.json()); // recognize incoming request object as JSON
app.use(express.urlencoded({extended: true})); // express body-parser

app.use("/addVideo", addVideo); // setting the route

app.listen(port, () => console.log("listening on port:" + port));