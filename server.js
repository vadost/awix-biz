const express = require('express');
const app = express();

app.use(express.static('dist'));

app.all('*', (req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(err);
});

app.listen(5000, () => {
  console.log(`App started`);
});
