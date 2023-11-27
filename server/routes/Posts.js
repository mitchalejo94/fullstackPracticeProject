//contains all routes related to posts.

//express has a routing system all ready implemented into the framework

const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  //   res.json("Hello World");
  const postList = await Posts.findAll();
  res.json(postList);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  //inserting the data into the database using sequelize
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
