const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

let comments = [
  {
    id: uuid(),
    username: "todd",
    comment: "hello",
  },
  {
    id: uuid(),
    username: "joe",
    comment: "goodbye",
  },
  {
    id: uuid(),
    username: "adam",
    comment: "wow",
  },
  {
    id: uuid(),
    username: "mike",
    comment: "ouch",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// INDEX
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// NEW
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// CREATE
app.post("/comments", (req, res) => {
  const { username, comment, id } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

// SHOW
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// EDIT
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// UPDATE
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  // Select comment by ID and assign to foundComment
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

// DELETE
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  // Mutate comments array by filtering out all comments that do not match id
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
