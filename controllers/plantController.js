const Plant = require("../models/Plant");

exports.savePlant = async (req, res) => {
  var { name, category, id, light, water, cover, price } = req.body;
  try {
    const plant = new Plant({
      name: name,
      category: category,
      id: id,
      light: light,
      water: water,
      cover: cover,
      price: price,
    });

    await plant.save();
    res.status(201).json({ message: "plant saved successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
