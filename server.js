const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('Hello World, from Docker!');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
