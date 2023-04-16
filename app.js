const express = require("express");
const app = express();

// Home Page Response

app.get("/", (request, response) => {
  response.send("Home Page");
});

// About Page Response

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000);
module.exports = app;
