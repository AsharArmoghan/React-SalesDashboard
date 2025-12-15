const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
	{
		user_id: { type: Number },
		createdAt: { type: Date },
		is_loyal: { type: Number },
		is_new: { type: Number },
		is_unique: { type: Number },
		amount_spent: { type: Number },
		sales_channel: { type: String },
		service_type: { type: String },
		region: { type: String },
		day_of_week: { type: String },
		month: { type: String },
		satisfaction_score: { type: Number },
	},
	{ id: false }
);
module.exports = mongoose.model("DashBoard", dashboardSchema);
