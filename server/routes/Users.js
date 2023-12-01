const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");

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

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});
module.exports = router;
