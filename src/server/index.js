const express = require("express");
const os = require("os");
const morgan = require("morgan");
// const { Pool } = require("pg");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const path = require("path");

const users = require("./router/api/users");

const { Client } = require("pg");

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

// client.connect();

// client.query(
//   "SELECT table_schema,table_name FROM information_schema.tables;",
//   (err, res) => {
//     if (err) throw err;
//     //   for (const row of res.rows) {
//     //     console.log(JSON.stringify(row));
//     //   }
//     for (let row = 0; row < res.length; row + 1) {
//       console.log(JSON.stringify(res[row]));
//     }
//     client.end();
//   }
// );

// app.get("/api/user", (req, res) => {
//   client.connect((err, db, done) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       db.query("SELECT * FROM public.user;", (errors, user) => {
//         if (err) {
//           res.status(404).json(errors);
//         }
//         // table.rows[0].name
//         res.json(user);
//       });
//     }
//   });
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passport middleware
app.use(passport.initialize());

app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.use("/api/users", users);
app.listen(process.env.PORT || 8080, () =>
  console.log("Listening on port 8080!")
);
