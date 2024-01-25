const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/cart', async(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
  });