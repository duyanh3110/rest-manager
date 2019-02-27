const express = require('express');
const uniqueString = require('unique-string');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const passport = require('passport');
const validateTableInput = require('../../validation/table');
const validateCustomerInput = require('../../validation/addcostumer');

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
  client.query('SELECT * FROM public.menu;', (errors, food) => {
    if (errors) {
      res.status(404).json(errors);
    }
    // table.rows[0].name
    res.json(food);
  });
});

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateTableInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const tableID = uniqueString();

  client.query(
    'SELECT * FROM public.table WHERE tableno = $1',
    [req.body.tableno],
    (errors, table) => {
      if (errors) {
        res.status(404).json(errors);
      } else if (table.rows.length == 0) {
        client.query(
          'INSERT INTO public.table(table_id, reservation, user_id, tableno) VALUES ($1,$2,$3,$4)',
          [tableID, req.body.reservation, req.user.user_id, req.body.tableno]
        );
        res.json({
          table_id: tableID,
          reservation: req.body.reservation,
          user_id: req.user.user_id,
          tableno: req.body.tableno
        });
      } else {
        res.json({ errors: 'table already exists' });
      }
    }
  );
});

router.get('/showtable', passport.authenticate('jwt', { session: false }), (req, res) => {
  client.query(
    'SELECT * FROM public.table WHERE user_id = $1',
    [req.user.user_id],
    (errors, table) => {
      if (errors) {
        res.status(404).json(errors);
      } else {
        res.json(table.rows);
      }
    }
  );
});

router.post('/deletetable', passport.authenticate('jwt', { session: false }), (req, res) => {
  client.query('DELETE FROM public.table WHERE table_id=$1', [req.body.table_id], (errors) => {
    if (errors) {
      res.status(404).json(errors);
    } else {
      res.json({ success: 'delete success' });
    }
  });
});

router.post('/addcustomer', passport.authenticate('jwt', { session: false }), (req, res) => {
  client.query(
    'UPDATE public.table set customerno = $1 WHERE tableno = $2 and user_id= $3;',
    [req.body.customerno, req.body.tableno, req.user.user_id],
    (errors) => {
      if (errors) {
        res.status(404).json(errors);
      } else {
        res.json({ success: 'add customer success' });
      }
    }
  );
});

router.post('/cleartable', passport.authenticate('jwt', { session: false }), (req, res) => {
  client.query(
    'UPDATE public.table set customerno = null WHERE tableno= $1 and user_id= $2',
    [req.body.tableno, req.user.user_id],
    (errors) => {
      if (errors) {
        res.status(404).json(errors);
      } else {
        res.json({ success: 'clear table success' });
      }
    }
  );
});

module.exports = router;
