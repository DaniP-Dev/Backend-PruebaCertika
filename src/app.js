const express = require("express");
const cors = require("cors");

const tasksRouter = require("./routes/tasks.routes");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/tasks", tasksRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
