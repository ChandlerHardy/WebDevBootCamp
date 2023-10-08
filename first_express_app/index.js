const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a request!");
//   // res.send("Hello, we got your request! This is a response!")
//   res.send('<h1>This is my webpage!</h1>');
// });

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  const { subreddit } = req.params;
  res.send(`Viewing subreddit r/${subreddit}!`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  res.send(`Viewing post ID: ${postId} on r/${subreddit}!`);
});

app.get("/cats", (req, res) => {
  res.send("meow");
  console.log("Sending /cats");
});

app.post("/cats", (req, res) => {
  res.send("Post request!");
});

app.get("/dogs", (req, res) => {
  res.send("woof!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search results for ${q}`);
});

app.get("*", (req, res) => {
  res.send("Path not found");
});

//  /cats => 'meow'
//  /dogs => 'woof'
//  '/'

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
