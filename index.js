const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/Product');
require('./models/Category');
require('./models/Order');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://m001-student:j93042929563@sandbox.rxaje.mongodb.net/e_commerce?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

require('./routes/productRoutes')(app);
require('./routes/categoryRoutes')(app);
require('./routes/orderRoutes')(app);

app.get('/', (req, res) => {
  res.send('API Backend');
});

app.listen(port, () => {
  console.log(`App running at localhost:${port}`);
});
