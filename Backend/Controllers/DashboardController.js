const Dashboard = require("../Models/Dashboard");

exports.getDashboard = async (req, res, next) => {
	try {
		const dashboard = await Dashboard.find();
		res.json(dashboard);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};
