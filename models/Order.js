const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  totalPrice: Number,
});

const orderSchema = new mongoose.Schema({
  user: String,
  items: [cartItemSchema],
  totalPrice: Number,
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
