const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const likeRoutes = require("./routes/likeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const friendshipRoutes = require("./routes/friendshipRoutes");

app.use(cors());
app.use(morgan("combined"));

app.use(express.json());

app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/like", likeRoutes);
app.use("/comment", commentRoutes);
app.use("/friendship", friendshipRoutes);

module.exports = app;
