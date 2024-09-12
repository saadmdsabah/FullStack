const express = require("express");
const userRoute = require("./Route/userRoute");
const middleWare = require("./middleware");
const app = express();
const PORT = 3000

app.get("/", middleWare, (req, res) => {
  res.json({
    status:"Success",
    "message":"Home Page"
  })
});

app.use("/users", middleWare, userRoute);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);  
})