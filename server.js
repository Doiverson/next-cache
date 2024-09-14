const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  res.send({
    number: Math.random(),
  });
  console.log('GET /random');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
