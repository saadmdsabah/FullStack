const express = require("express");
const path = require("path");
const ejsLayout = require("express-ejs-layouts")
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//!adding layout MiddleWare
app.use(ejsLayout);
app.set("layout", "layout/main-layout.ejs")

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

//!Page Not Found (404)
app.use((req, res, next)=>{
  const error = new Error("Page Not Found");
  next(error);
})

app.use((err, req, res, next)=>{
  const errorMessage = err.message;
  res.render("error", {error: errorMessage})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
