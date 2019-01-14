const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const port = 80;
app.use(history());
app.get('*', (req, res) => {
  res.set('Content-Type', req.headers.accept);
  return res.sendFile(`${__dirname}/dist/${req.path}`)
});
app.listen(port, () => console.info(`HTTP server up on port ${port}`));