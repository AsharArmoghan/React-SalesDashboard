const Dashboard = require("../Models/Dashboard");

exports.getDashboard = async (req, res, next) => {
	try {
		const dashboard = await Dashboard.find();
		res.json(dashboard);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};
exports.saveDashboard = async () => {
	try {
		const dashboard = new Dashboard({
			user_id: req.body.user_id,
			createdAt: req.body.createdAt,
			is_loyal: req.body.is_loyal,
			is_new: req.body.is_new,
			is_unique: req.body.is_unique,
			amount_spent: req.body.amount_spent,
			sales_channel: req.body.sales_channel,
			service_type: req.body.service_type,
			region: req.body.region,
			day_of_week: req.body.day_of_week,
			month: req.body.month,
			satisfaction_score: req.body.satisfaction_score,
		});
		Dashboard.insertMany(dashboard);
		console.log("Dashboard data saved successfully");
	} catch (error) {
		console.error("Error fetching or saving products:", error.message);
	}
};
