const User = require("../Models/User");
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
	let createduser;
	console.log(req.body.email);
	const user = await User.findOne({
		email: req.body.email,
	});
	if (user.email === req.body.email) {
		return res.status(400).json({ message: "User already register", error: "User already register" });
	} else if (req.body) {
		await Bcrypt.hash(req.body.password, 10)
			.then(hash => {
				const user = new User({
					username: req.body.username,
					email: req.body.email,
					password: hash,
				});
				const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET, { algorithm: "HS256", expiresIn: "1h" });
				user.save();
				res.status(200).json({ message: "User Created", token, expiresIn: "1h", userId: user._id });
			})
			.catch(() => res.status(500).json({ error: "something went wrong" }));
		createduser.save();

		res.status(200).json({ message: "User Created" });
	}
};

exports.login = async (req, res) => {
	try {
		// Find user by email
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		// Compare password
		const isMatch = await Bcrypt.compare(req.body.password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}
		const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET, { algorithm: "HS256", expiresIn: "1h" });
		return res.status(200).json({
			token,
			expiresIn: "1h",
			userId: user._id,
		});
	} catch (error) {
		return res.status(500).json({ message: "Something went wrong! Please try again." });
	}
};
