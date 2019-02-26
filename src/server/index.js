const express = require('express');
const os = require('os');
const morgan = require('morgan');
// const { Pool } = require("pg");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bodyParser = require('body-parser');

const app = express();
const passport = require('passport');
const { Client } = require('pg');
const users = require('./router/api/users');
const menu = require('./router/api/menu');
const restaurants = require('./router/api/restaurants');
const orders = require('./router/api/orders');

const client = new Client({
  // connectionString: process.env.DATABASE_URL,
  user: 'faqiaquxwsvcfl',
  host: 'ec2-54-75-245-94.eu-west-1.compute.amazonaws.com',
  database: 'd2r9omcof890g8',
  password: '8252532b9171685b9ebf552cd307f0aaed95df071d65090b86e6b04781c0f8b1',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  ssl: true
});

client.connect();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
  // process.env.SECRET_OR_KEY
};

const strategy = new JwtStrategy(opts, (payload, next) => {
  // TODO GET USER FROM DB
  client.query('SELECT * FROM public.user WHERE user_id = $1;', [payload.id], (errors, user) => {
    if (errors) {
      return done(errors, false);
    }
    if (user.rows.length > 0) {
      return next(null, user.rows[0]);
    }
    return next(null, false);
  });
});

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// passport middleware
passport.use(strategy);
app.use(passport.initialize());

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.use('/api/users', users);
app.use('/api/menu', menu);
app.use('/api/restaurants', restaurants);
app.use('/api/orders', orders);

app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080!'));
