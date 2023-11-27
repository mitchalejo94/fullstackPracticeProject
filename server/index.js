const express = require("express");
const app = express();
const cors = require("cors");

//Will fix any issues with parsing
app.use(express.json());
//cors validation
app.use(cors());

//This is how we import our tables. Will automatically go through every table.
const db = require("./models");

//Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

//Comments Routers
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on Port 3002");
  });
});
//run anonymous function when the serving is running
