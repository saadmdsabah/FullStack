const express = require("express");

//!Initializing the ExpressJS
const app = express();

//!Creating port
const PORT = 3000;

//!creating Request Handler
app.get("/", (req, res) => {
  res.send("Hello, World htid is being added \n also this THIS IS US");
});

//!Starting the App
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//checking
//once again