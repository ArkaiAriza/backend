const mongoose = require('mongoose');
const Category = mongoose.model('Category');

module.exports = (app) => {
  app.get('/category', async (req, res) => {
    await Category.find((err, categories) => {
      res.send(categories);
    });
  });

  app.post('/category', async (req, res) => {
    console.log(req.body);
    const category = new Category(req.body.params.category);
    category.save((err, category) => {
      res.send(category);
    });
  });

  app.delete('/category/:CategoryId', async (req, res) => {
    Category.deleteOne({ _id: req.params.CategoryId }, (err, category) => {
      res.send(category);
    });
  });
};
