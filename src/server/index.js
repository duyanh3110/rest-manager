const express = require('express');
const os = require('os');

const app = express();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  //   for (const row of res.rows) {
  //     console.log(JSON.stringify(row));
  //   }
  for (let row = 0; row < res.length; row + 1) {
    console.log(JSON.stringify(res[row]));
  }
  client.end();
});

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080!'));
