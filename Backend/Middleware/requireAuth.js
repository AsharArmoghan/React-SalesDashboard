const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const requireAuth = async (res, req, next) => {
	const token = req.headers("Authorization");
	// token = token.split(" ")[1];

	if (!token) {
		res.status(401).json({ error: "Authorisation required " });
	}
	try {
		const { _id } = jwt.verify(token, process.env.SECRET);
		req.user = await User.find({ _id }).select("_id");
		next();
	} catch (error) {
		console.log("Error:", error);
		res.status(401).json({ error: "Request is not authorized" });
	}
};

module.exports = requireAuth;
