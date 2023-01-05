// const { Router } = require("express");
const loginRouter = require("express").Router();
const path = require("path");
const bodyParser = require("body-parser");

loginRouter.use(bodyParser.urlencoded({ extended: true }));

loginRouter.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/OneDrive/Desktop/webServer/createLoginAPI/public/login.html"
  );
});

loginRouter.post("/", (req, res) => {
  const email = req.body.email;
  const pwd = req.body.pwd;
  // res.json({ email: email, pwd: pwd });
  res.send(req.body);
});

module.exports = loginRouter;
