require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const session = require("express-session");
const UserModel = require("../models/user.model");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
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
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, cb) {
      let { name, email } = profile._json;
      let password = "1234";
      const user = await UserModel.findOne({ email });
      if (!user) {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.log(err);
            return;
          }
          const newUser = new UserModel({
            name,
            email,
            password: hash,
          });
          newUser.save();
          let { _id } = await UserModel.findOne({ email });
          const token = jwt.sign({ _id }, JWT_SECRET, {
            expiresIn: "6h",
          });
          profile.token = token;
        });
        return cb(null, profile);
      }
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "6h",
      });
      profile.token = token;
      return cb(null, profile);
    }
  )
);

Router.get(
  "/",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

//........when we authenticate where we sends the user...........
Router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000",
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/publishing");
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
