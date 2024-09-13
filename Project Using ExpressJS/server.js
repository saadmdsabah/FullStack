const express = require("express")
const path = require("path")
const app = express();
const PORT = 3000;

//!for serving static files
app.use(express.static(path.join(__dirname, "public")))

//! Home Page
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

//! about Page
app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "about.html"));
})

//! contact Page
app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "contact.html"));
})

//! gallery Page
app.get("/gallery", (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "gallery.html"));
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})