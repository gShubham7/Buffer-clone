require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = express.Router();
const jwt = require("jsonwebtoken");
const TwitterStrategy = require("passport-twitter").Strategy;
const passport = require("passport");
const session = require("express-session");
const UserModel = require("../models/user.model");
const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;

Router.use(cors({ origin: `http://localhost:3000`, credentials: true }));

Router.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   sameSite: "none",
    //   secure: true,
    //   maxAge: 1000 * 60 * 60 * 60 * 24 * 7,
    // },
  })
);

Router.use(passport.initialize());
Router.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: `/auth/twitter/callback`,
    },
    async function (token, tokenSecret, profile, cb) {
      let { email } = profile._json;
      const user = await UserModel.findOne({ email });
      if (!user) {
        const newUser = new UserModel({
          name,
          email,
          password: "1234",
        });
        newUser.save();
        let { _id } = await UserModel.findOne({ email });
        token = jwt.sign({ _id }, JWT_SECRET, {
          expiresIn: "6h",
        });
        profile.token = token;
        return cb(null, profile);
      }
      token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "6h",
      });
      profile.token = token;
      return cb(null, profile);
    }
  )
);

Router.get("/", passport.authenticate("twitter"));

Router.get(
  "/callback",
  passport.authenticate("twitter", {
    failureRedirect: "http://localhost:3000",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000");
  }
);

Router.get("/getuser", (req, res) => {
  if (req.user) {
    return res.status(200).send(req.user);
  }
  return res.status(401).send("Please Login first");
});

Router.get("/logout", (req, res) => {
  req.logout((err, done) => {
    if (err) {
      return res.send("Something went wrong");
    }
    return res.send("Logout Successfully");
  });
});

module.exports = Router;
