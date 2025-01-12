const app = require("express")();
const pino = require("pino-http")();

app.use(pino);

app.get("/", function (req, res) {
  req.log.info("okay");
  res.send("coming now...");
});

app.listen(3007);
