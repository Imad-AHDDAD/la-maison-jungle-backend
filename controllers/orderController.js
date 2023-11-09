const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  var { userId, items, totalPrice } = req.body;
  try {
    const order = new Order({
      user: userId,
      items: items,
      totalPrice: totalPrice,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
