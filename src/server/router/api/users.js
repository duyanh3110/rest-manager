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

  const email = req.body.email;
  const password = req.body.password;

  client.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * FROM public.user WHERE email = $1 ;",
        [req.body.email],
        (errors, user) => {
          if (err) {
            res.status(404).json(errors);
          }

          // table.rows[0].name
          res.json(user);
        }
      );
    }
  });
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
      var hashpass = req.body.password;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(hashpass, salt, (err, hash) => {
          if (err) throw err;
          hashpass = hash;
          res.json({ hashpass });

          // db.query(
          //   "INSERT INTO public.user( user_id, name, email, password ) VALUES ($1,$2,$3,$4);",
          //   [req.body.id, req.body.name, req.body.email, hashpass]
          // );
        });
      });
    }
  });
});
// INSERT INTO public.user("user_id","name", "email","password") VALUES ('1', 'Huy','huy@asd.com','huy123');
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
