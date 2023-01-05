const signUpRouter = require("express").Router();
const path = require("path");
// const bodyParser = require("body-parser");

signUpRouter.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/webServer/createLoginAPI/public/signUp.html"
  );
});

module.exports = signUpRouter;
