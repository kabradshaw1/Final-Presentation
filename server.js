const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const secretMessage = process.env.SECRET_MESSAGE || 'No secret message defined';

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.get('/', (req, res) => {
  res.send(`Hello, Kubernetes! Secret message: ${secretMessage}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
