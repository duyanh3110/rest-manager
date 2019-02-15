const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Client } = require("pg");
const passport = require("passport");

const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");

const client = new Client({
  // connectionString: process.env.DATABASE_URL,
  user: "faqiaquxwsvcfl",
  host: "ec2-54-75-245-94.eu-west-1.compute.amazonaws.com",
  database: "d2r9omcof890g8",
  password: "8252532b9171685b9ebf552cd307f0aaed95df071d65090b86e6b04781c0f8b1",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  ssl: true
});

router.post("/test", (req, res) => res.json({ msg: "Users work" }));

//Login
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  res.json({ msg: "huy" });
});

//Register
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  client.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "INSERT INTO public.user (UserID ,Name ,email ,Password) VALUES($1,$2,$3,$4)",
        [req.body.id, req.body.name, req.body.email, req.body.password]
      );
      res.json({ msg: "success" });
    }
  });
});
// INSERT INTO public.user("UserID","Name", "email","Password") VALUES ('2','Huy','huy@asd.com','huy123');
// DELETE FROM public.user where "Name" = 'Huy';
//list all users
router.get("/allusers", (req, res) => {
  client.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query("SELECT * FROM public.user;", (errors, user) => {
        if (err) {
          res.status(404).json(errors);
        }
        // table.rows[0].name
        res.json(user);
      });
    }
  });
});

module.exports = router;
