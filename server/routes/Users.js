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

module.exports = router;
