const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  //category: String,
  barCode: String,
  stock: Number,
});

const Product = mongoose.model('Product', schema);
