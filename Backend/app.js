const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const dashboardRoute = require("./Routes/dashboard");
const orderRoute = require("./Routes/orderRoute");
const Dashboard = require("./Models/Dashboard");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Request-Method", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.header(
		"Access-Control-Allow-Headers",
		"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Origin, X-HTTP-Method-Override, Accept, X-Access-Token"
	);
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

mongoose
	.connect("mongodb+srv://syed:" + process.env.password + "@cluster0.1ndmrol.mongodb.net/dash-board?retryWrites=true&w=majority")
	.then(() => {
		console.log("connected to DataBase");
	})
	.catch(error => {
		console.log(error, "Can't connect to DataBase");
	});

const data = require("../dashboard/src/Asset/data/Dashboard.json");

// const fetchAndSaveProducts = async () => {
// 	try {
// 		// const response = await fetch("./Asset/data/Dashboard.json");
// 		const dashboard = data;
// 		// const dashboard = await response.json();
// 		await Dashboard.insertMany(dashboard);
// 		console.log("Products saved successfully");
// 	} catch (error) {
// 		console.error("Error fetching or saving products:", error.message);
// 	}
// };
// fetchAndSaveProducts();

app.listen(process.env.PORT || 8080, () => {
	console.log("listening on port " + process.env.PORT);
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/dashboards", dashboardRoute);

app.get("/", (req, res) => {
	res.send("Helloo connected to Backend");
});

module.exports = app;
