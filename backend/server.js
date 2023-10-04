require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).send("Bad Request: Invalid JSON");
  }
  next();
});


const TOKEN_KEY = "qwertyuiop";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password, firstName, lastName, birthDate, country } =
      req.body;
    if (
      !(username && password && firstName && lastName && birthDate && country)
    ) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User already exist");
    }

    encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username,
      password: encryptedPassword,
      firstName,
      lastName,
      birthDate,
      country,
    });

    const token = jwt.sign({ user_id: user._id, username: user.username }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;
    // return new user
    res.status(201).json(user);
    // .then((users) => res.json(users))
    // .catch((err) => res.status(500).json({ error: err.message }));
  } catch (err) {
    console.log(err);
  }
});

// app.get("/logout", (req, res) => {
//   res.clearCookie("username");
//   res.clearCookie("password");
//   res.clearCookie("login");
//   res.redirect("/");
// });

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log("req.body =",req.body);
    // console.log("req.headers =",req.headers);
    if (!(username && password)) {
      return res.status(400).send("Email or password is required");
    }

    const user = await User.findOne({ username: req.body.username });
    console.log("user in server = ", user);
    
      // const result = await bcrypt.compare(password, user.password);
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        // console.log("result =", result);
        console.log("user.password =", user.password);
        // create token
        const token = jwt.sign({ user_id: user._id, username: user.username }, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        // save user token
        user.token = token;
        console.log("token =", user.token);
        res.status(200).json(user);
      } else {
        res.status(400).send("invalid");
      }
    
  } catch (err) {
    console.log(err);
    res.status(500).send("login Server Error");
  }

  // console.log(username)
  // .then((user) => {
  //   if (user) {
  //     if (user.password === password) {
  //       res.json("exist");
  //     } else {
  //       res.json("Password incorrect");
  //     }
  //   }
  // });
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("welcome bro");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
