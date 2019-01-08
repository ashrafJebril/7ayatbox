const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const passport = require("passport");
const userRouter = require("./routes/user.js");
const providerRouter = require("./routes/provider.js");
const servicesRouter = require("./routes/Services.js");
const reservationRouter=require("./routes/Reservation.js")
const contactusRouter = require("./routes/ContactUs.js");

const cookieSession = require("cookie-session");
const port = process.env.PORT || 5000;
var cors = require("cors");
// Passport Config
require("./config/passport")(passport);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Priority to serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build")));
// Express session
app.use(
  session({
    secret: "thesecret",
    saveUninitialized: true,
    resave: true
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouter);

app.use("/provider", providerRouter);
app.use("/services", servicesRouter);
app.use("/Reservation", reservationRouter);
app.use("/contactus", contactusRouter);


app.get("/profile", function(req, res) {
  res.send(req.session);
});
// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
