const express = require('express');
const uniqueString = require('unique-string');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const passport = require('passport');

const validateMenuInput = require('../../validation/menu');

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

router.post('/test', (req, res) => {
  client.query('SELECT * FROM public.menu;', (errors, food) => {
    if (errors) {
      res.status(404).json(errors);
    }
    // table.rows[0].name
    res.json(food);
  });
});

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateMenuInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const FoodFields = {};

  FoodFields.food_id = uniqueString();
  FoodFields.user_id = req.user.user_id;
  if (req.body.description) FoodFields.description = req.body.description;
  if (req.body.price) FoodFields.price = req.body.price;
  if (req.body.type) FoodFields.type = req.body.type;
  if (req.body.name) FoodFields.name = req.body.name;

  client.query(
    'INSERT INTO public.menu( food_id, food_name, description,price, user_id, foodtype ) VALUES ($1,$2,$3,$4,$5,$6);',
    [
      FoodFields.food_id,
      FoodFields.name,
      FoodFields.description,
      FoodFields.price,
      FoodFields.user_id,
      FoodFields.type
    ]
  );
  res.json({
    food_id: FoodFields.food_id,
    name: FoodFields.name,
    description: FoodFields.description,
    price: FoodFields.price,
    user_id: FoodFields.user_id,
    type: FoodFields.type
  });
});

router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res) => {
  client.query('DELETE FROM public.menu WHERE food_id = $1', [req.body.id], (errors) => {
    if (errors) {
      res.json({ errors: 'food not found' });
    } else {
      res.json({ succes: 'food deleted' });
    }
  });
});

module.exports = router;
