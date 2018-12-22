const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const db = require("../DataBase/index");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Priority to serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build")));
// app.get("/hello", (req, res) => {
//   db.insertProvider("yazeed", "y1y2y3");
//   db.selectProviders(results => {
//     console.log("eeeeeee", results);
//     var hi = `Hello From Express and mysql ${results[0].providerName}`;
//     res.send({ express: hi });
//   });
// });
// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
