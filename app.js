const path = require('node:path');
const express = require('express');

const app = express();

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from GoDaddy' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

module.exports = app;
