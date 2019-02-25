const express = require('express');
const uniqueString = require('unique-string');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const passport = require('passport');

const validateLocationInput = require('../../validation/restaurants');

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

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateLocationInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const RestaurantFields = {};
  RestaurantFields.user_id = req.user.user_id;
  RestaurantFields.restaurant_id = uniqueString();
  if (req.body.name) RestaurantFields.name = req.body.name;
  if (req.body.location) RestaurantFields.location = req.body.location;

  client.query(
    'INSERT INTO public.restaurant( restaurant_id, name, location,user_id ) VALUES ($1,$2,$3,$4);',
    [
      RestaurantFields.restaurant_id,
      RestaurantFields.name,
      RestaurantFields.location,
      RestaurantFields.user_id
    ]
  );
  res.json({
    user_id: RestaurantFields.user_id,
    name: RestaurantFields.name,
    location: RestaurantFields.location,
    restaurant_id: RestaurantFields.restaurant_id
  });
});

// update public.restaurant set location = 'Oulu' where restaurant_id = 'a2c7eab11d9e9a9ad47d49dfeba7a49e';
// router.update('/update', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const { errors, isValid } = validateLocationInput(req.body);

//   // Check Validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const RestaurantFields = {};
//   if (req.body.name) RestaurantFields.name = req.body.name;
//   if (req.body.location) RestaurantFields.location = req.body.location;

//   client.query();
// });

module.exports = router;
