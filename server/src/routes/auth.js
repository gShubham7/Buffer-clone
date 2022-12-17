const express = require("express");
const Router = express.Router();
const GoogleAuth = require("../config/google-oauth");
const FacebookAuth = require("../config/facebook-oauth");
const TwitterAuth = require("../config/twitter.oauth");
const { register, login } = require("../controllers/auth.controller");

Router.use("/google", GoogleAuth);
Router.use("/facebook", FacebookAuth);
Router.use("/twitter", TwitterAuth);
Router.use("/register", register);
Router.use("/login", login);

module.exports = Router;
