const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: "string" },
  email: { type: "string", require: true, unique: true },
  password: { type: "string", require: true },
});

// static signup method
// userSchema.statics.signup = async function ({ username, email, password }) {
// 	// validation
// 	if (!email || !password) {
// 		throw Error("All fields must be filled");
// 	}
// 	// if (!validator.isStrongPassword(password)) {
// 	// 	throw Error("Password not strong enough");
// 	// }
// 	const exists = await this.findOne({ email });
// 	if (exists) {
// 		throw Error("Email already in use");
// 	}
// 	const salt = await bcrypt.genSalt(10);
// 	const hash = await bcrypt.hash(password, salt);
// 	const user = await this.create({ username, email, password: hash });
// 	return user;
// };

module.exports = mongoose.model("User", userSchema);
