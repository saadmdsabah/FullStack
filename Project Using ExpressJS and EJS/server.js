const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

//! Home Page
app.get("/", (req, res) => {
  res.render("home");
});

//! about Page
app.get("/about", (req, res) => {
  res.render("about");
});

//! contact Page
app.get("/contact", (req, res) => {
  res.render("contact");
});

//! gallery Page
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
