const path = require("path");

module.exports = function override(config, env) {
	config.resolve.alias = {
		...config.resolve.alias,
		"@": path.resolve(__dirname, "src/"),
		"@/Context": path.resolve(__dirname, "src/Context/"),
		"@/Hooks": path.resolve(__dirname, "src/Hooks/"),
		"@/Pages": path.resolve(__dirname, "src/Pages/"),
		"@/Router": path.resolve(__dirname, "src/Router/"),
		"@/components": path.resolve(__dirname, "src/components/"),
		"@/animations": path.resolve(__dirname, "src/animations/"),
	};
	return config;
};
