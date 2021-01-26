const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = (app) => {
  app.get('/product', async (req, res) => {
    await Product.find((err, products) => {
      res.send(products);
    });
  });

  app.post('/product', async (req, res) => {
    console.log(req.body);
    const product = new Product(req.body.params.product);
    product.save((err, product) => {
      res.send(product);
    });
  });

  app.delete('/product/:ProductId', async (req, res) => {
    Product.deleteOne({ _id: req.params.ProductId }, (err, product) => {
      res.send(product);
    });
  });

  app.post('/product/filter', async (req, res) => {
    console.log(req.body.params.category);

    Product.find({ category: req.body.params.category }, (err, products) => {
      res.send(products);
    });
  });
};
