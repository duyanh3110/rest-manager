const express = require('express');
const uniqueString = require('unique-string');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const passport = require('passport');

const validateOrder = require('../../validation/order');

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

router.get('/test', (req, res) => {
  client.query('SELECT * FROM public.order;', (errors, order) => {
    if (errors) {
      res.status(404).json(errors);
    }
    // table.rows[0].name
    res.json(order);
  });
});

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateOrder(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const OrderFields = {};

  OrderFields.order_id = uniqueString();
  // Get table id from key at frontend
  OrderFields.table_id = '5a240f52e069e518d5c46722640f6c75';
  if (req.body.foodorder) OrderFields.foodorder = req.body.foodorder;
  if (req.body.price) OrderFields.price = req.body.price;
  if (req.body.status) OrderFields.status = req.body.status;

  client.query(
    'INSERT INTO public.order( order_id, food_order, table_id, price, status ) VALUES ($1,$2,$3,$4,$5);',
    [
      OrderFields.order_id,
      OrderFields.foodorder,
      OrderFields.table_id,
      OrderFields.price,
      OrderFields.status
    ]
  );
  res.json({
    order_id: OrderFields.order_id,
    food_order: OrderFields.food_order,
    table_id: OrderFields.table_id,
    price: OrderFields.price,
    status: OrderFields.status
  });
});

router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Need to delete by order_id
  client.query('DELETE FROM public.order WHERE food_order=$1;', ['asdasdd']);
  res.json({
    order: 'Delete'
  });
});

router.post('/update', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Need to delete by order_id
  client.query('UPDATE public.order SET status=$1 WHERE food_order=$2;', ['done', 'asdasdv']);
  res.json({
    status: 'done'
  });
});

module.exports = router;
