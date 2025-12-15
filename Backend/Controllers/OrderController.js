const Order = require("../Models/Order");

exports.getAllOrders = async (req, res, next) => {
	try {
		const orders = await Order.find();
		res.json(orders);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

exports.getOrder = async (req, res, next) => {
	try {
		const id = req.params.id || req.params.Id;
		Order.findOne({ id: id }).then(result => {
			if (!result) res.status(404).json({ message: "Order Not Found!" });
			res.status(200).json(result);
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

exports.addOrder = (req, res, next) => {
	try {
		const order = new Order({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			quantityAvailable: req.body.quantityAvailable,
		});
		order.save().then(createdOrder => {
			res.status(201).json({
				message: "Order Added",
				Order: {
					...createdOrder,
					id: createdOrder._id,
				},
			});
		});
	} catch (error) {
		console.log(error, "something went wrong");
	}
};
