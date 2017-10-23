const express = require('express');
const app = express();
const path = require('path');
const files_dir = path.join(process.cwd(), 'dist');

app.use(express.static('dist'));

app.all('*', (req, res, next) => {
  res.sendFile(files_dir + '/index.html');
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
