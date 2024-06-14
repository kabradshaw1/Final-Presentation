const express = require('express');
const app = express();
const port = 3000;
const secretMessage = process.env.SECRET_MESSAGE || 'No secret message defined';

app.get('/', (req, res) => {
  res.send(`Hello, Kubernetes! Secret message: ${secretMessage}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
