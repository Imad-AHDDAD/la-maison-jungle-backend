const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    name: String,
    category: String,
    id: String,
    light: Number,
    water: Number,
    cover: String,
    price: Number
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;