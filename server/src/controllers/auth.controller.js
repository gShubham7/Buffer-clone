const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const token = req.headers["authorization"];

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).send({ error: "User already exists" });
  }
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      return res.status(500).send({ error: "Internal server error" });
    }
    try {
      if (token) {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded && decoded.role === "Admin") {
          const user = new UserModel({
            name,
            email,
            password: hash,
            role: "User",
          });
          await user.save();
          return res.status(201).send("User created succesfully");
        }
        return res.status(403).send("You are not allowed to create user");
      }
      const newUser = await UserModel.create({ name, email, password: hash });
      return res.status(201).send({ user: newUser });
    } catch (err) {
      return res.status(500).send({ error: "Internal server error" });
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }

  bcrypt.compare(password, user.password, async (err, result) => {
    if (err) {
      return res.status(500).send({ error: "Internal server error" });
    }
    if (!result) {
      return res.status(401).send({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    return res.status(200).send({ token });
  });
};

module.exports = { register, login };
