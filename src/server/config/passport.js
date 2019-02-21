const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

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

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_paylaod, done) => {
      client.connect((err, db, done) => {
        if (err) {
          return console.log(err);
        } else {
          db.query(
            "SELECT * FROM public.user WHERE email = $1 ;",
            [jwt_paylaod.id],
            (errors, user) => {
              if (user.rows.length >= 1) {
                return done(null, user.rows[0]);
              }
              return done(null, false);
            }
          );
        }
      });
      //   User.findById(jwt_paylaod.id)
      //     .then(user => {
      //       if (user) {
      //         return done(null, user);
      //       }
      //       return done(null, false);
      //     })
      //     .catch(err => console.log(err));
    })
  );
};
