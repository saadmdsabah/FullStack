const express = require("express");
const userRoute = require("./Route/userRoute");
const app = express();
const PORT = 3000

app.get("/", (req, res) => {
  res.json({
    status:"Success",
    "message":"Home Page"
  })
});

app.use("/users", userRoute);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);  
})