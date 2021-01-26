Product = {
  name: String,
  description: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  barCode: String,
  stock: Number,
};

Category = {
  name: String,
  description: String,
};

Order = {
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
};
