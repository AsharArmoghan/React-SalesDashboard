const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, ref: "User" },
	products: [{ type: mongoose.Types.ObjectId, ref: "Product" }, { quantity: Number }],
	orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
