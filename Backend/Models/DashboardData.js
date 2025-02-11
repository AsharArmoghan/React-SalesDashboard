const mongoose = require("mongoose");

const dashboardDataSchema = new mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, ref: "User" },
	totalSales: { type: Number },
	topProducts: [{ productId: { type: mongoose.Types.ObjectId, ref: "Product" }, type: Number }],
});

module.exports = mongoose.model("DashBoard", dashboardDataSchema);
