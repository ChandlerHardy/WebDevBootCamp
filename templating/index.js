const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// Set path to public directory in root to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
// Set path to /views in directory that index.js is located
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

// Page that displays random number 1-10
app.get("/rand", (req, res) => {
  // Create random number
  const num = Math.floor(Math.random() * 10) + 1;
  // Passes num into render for use by random.ejs
  res.render("random", { num });
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  // Quick peek into req.params
  console.log(req.params);
  // Destructure subreddit from req.params
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  console.log(data);
  if (data) {
    // Desctructure data and pass into render for use in r/:subreddit
    // Render takes a second argument in the form of an object telling it
    // which variables to pass into the function
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("*", (req, res) => {
  res.render("notfound");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
