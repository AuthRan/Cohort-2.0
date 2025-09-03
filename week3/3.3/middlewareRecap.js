const express = require("express");

const app = express();

app.use(express.json());

function isOld(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

function isOldMiddleware(req, res, next) {
  age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.json({
      status: 200,
      msg: "You cannot ride",
    });
  }
}

app.get("/route1", isOldMiddleware, function (req, res) {
    res.json({
      status: 200,
      msg: "You can ride",
    })
});

app.listen(8000);
