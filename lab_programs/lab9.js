const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js Server!</h1><p>This content is displayed in the browser.</p>');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
