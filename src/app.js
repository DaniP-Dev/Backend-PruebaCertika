const express = require("express");
const cors = require("cors");
const path = require("path");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const tasksRouter = require("./routes/tasks.routes");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();
const openApiSpecPath = path.join(__dirname, "..", "docs", "openapi.yaml");
const openApiSpec = YAML.load(openApiSpecPath);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/tasks", tasksRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
