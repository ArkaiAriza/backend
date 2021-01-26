Product = {
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  barCode: String,
  stock: Number,
};

Category = {
  _id: ObjectId,
  name: String,
  description: String,
};

Order = {
  _id: ObjectId,
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
