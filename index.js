// Bringing...
require("dotenv").config();
const express = require("express");
const pino = require("pino");
const pretty = require("pino-pretty");

// Starting...
// app.use(pino);
const app = express();
const logger = pino(pretty()); // not logger = pino();

app.use("/", function (req, res, next) {
  logger.info(
    {
      req: {
        method: req.method,
        url: req.url,
      },
    },
    "Incoming request!"
  );
  next();
});

app.get("/", (req, res) => {
  logger.info("Handling GET Request!");
  res.send("Hello from Browser!");
});

app.listen(process.env.APP_PORT, () => {
  logger.info(`Server is listening on port ${process.env.APP_PORT}`);
});
