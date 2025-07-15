const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: "Sample Product 1", description: "This is product 1", price: 10 },
  { id: 2, name: "Sample Product 2", description: "This is product 2", price: 20 }
];

app.use(express.static('frontend'));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
