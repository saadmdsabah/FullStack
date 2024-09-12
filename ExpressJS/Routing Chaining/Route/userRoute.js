const express = require("express");

const userRoute = express.Router();

userRoute.route("/").get((req, res) => {
  res.json({
    status: "Success",
    message: "Fetched All Users",
  });
});

userRoute
  .route("/:id")
  .get((req, res) => {
    res.json({
      status: "Success",
      message: "Fetched a User",
    });
  })
  .put((req, res) => {
    res.json({
      status: "Success",
      message: "Updated a User",
    });
  })
  .delete((req, res) => {
    res.json({
      status: "Success",
      message: "Deleted a User",
    });
  });

module.exports = userRoute;
