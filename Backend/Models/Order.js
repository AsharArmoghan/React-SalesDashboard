const mongoose = require("mongoose");
const ProductSchema = require("./product").schema;

const orderSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		products: [
			{
				type: ProductSchema,
				required: true,
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
			type: Number,
		},
	},
	{ _id: false },
	{ timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
