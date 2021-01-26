const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    },
  ],
  userData: {
    idType: String,
    idNumber: String,
    name: String,
    adress: String,
    city: String,
    email: String,
  },
});

const Order = mongoose.model('Order', schema);
