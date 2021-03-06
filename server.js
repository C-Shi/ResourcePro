"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const cookieSession = require('cookie-session');
const app         = express();
const flash       = require('connect-flash');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

const userHelper = require('./lib/user-helper');
const resourceHelper = require('./lib/resource-helper');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'session',
  secret: 'something'
}));

app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(flash());

// set local variables for users
app.use(function(req, res, next){
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  const user = {
    email: req.session.email };
  if (user.email) {
    userHelper.loginUser(user, (currentUser) => {
      res.locals.user = currentUser;
      return next();
    })
  } else {
    res.locals.user = undefined;
    return next();
  }
});

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
const routes = require('./routes/routes.js');
app.use('/', routes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

module.exports = app;
