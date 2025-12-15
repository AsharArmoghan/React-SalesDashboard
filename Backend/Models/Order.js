const mongoose = require("mongoose");
const ProductSchema = require("./product").schema;

const orderSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			unique: true,
		},
		products: [
			{
				type: ProductSchema,
			},
		],
		totalProducts: {
			type: Number,
		},
		total: {
			type: Number,
		},
		discountedTotal: {
			type: Number,
		},
		totalQuantity: {
			type: Number,
		},
		userId: {
			type: String,
		},
		title: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
