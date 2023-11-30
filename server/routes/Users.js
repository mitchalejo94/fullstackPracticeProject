const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  //   res.json("Hello World");
  const postList = await Users.findAll();
  res.json(postList);
});

router.post("/", async (req, res) => {
  //inserting the data into the database using sequelize
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("success message");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User doesnt exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Username and or Password don't match up" });

    res.json("You are logged in");
  });
});

module.exports = router;
