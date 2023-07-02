const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");
const User = require("./models/userModel");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());
app.use(cors());

app.use(async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      const newUser = User.create({
        name: "Emre",
        surname: "Beskan",
        email: "yusufemre140@gmail.com",
      });

      req.user = newUser;
    } else {
      req.user = users[0];
    }
    next();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Burda hata",
    });
  }
});

app.use("/api/v1", itemRoutes);

module.exports = app;
