const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Priority to serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
