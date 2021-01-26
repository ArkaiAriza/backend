const mongoose = require('mongoose');
const Order = mongoose.model('Order');

module.exports = (app) => {
  app.get('/order', async (req, res) => {
    await Order.find((err, orders) => {
      res.send(orders);
    });
  });

  app.post('/order', async (req, res) => {
    console.log(req.body);
    console.log(req.body.params.order.products);
    console.log(req.body.params.order.userData);
    const order = new Order(req.body.params.order);
    order.save((err, order) => {
      res.send(order);
    });
  });

  app.delete('/order/:OrderId', async (req, res) => {
    Order.deleteOne({ _id: req.params.OrderId }, (err, order) => {
      res.send(order);
    });
  });
};
