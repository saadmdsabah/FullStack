const express = require("express");

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Fetched All Users",
  });
});

userRoute.get("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Fetched a User",
  });
});

userRoute.put("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Updated a User",
  });
});

userRoute.delete("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Deleted a User",
  });
});

module.exports = userRoute;