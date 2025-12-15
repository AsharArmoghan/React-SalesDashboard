const Product = require("../Models/product");

exports.getAllProducts = async (req, res, next) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

exports.getProduct = async (req, res, next) => {
	try {
		const id = req.params.id || req.params.Id; // Handle case sensitivity if route param varies
		Product.findOne({ id: id }).then(result => {
			if (!result) res.status(404).json({ message: "Product Not Found!" });
			res.status(200).json(result);
			console.log(result);
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

exports.addProduct = (req, res, next) => {
	try {
		const product = new Product({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			quantityAvailable: req.body.quantityAvailable,
		});
		product.save().then(createdProduct => {
			res.status(201).json({
				message: "Product Added",
				product: {
					...createdProduct,
					id: createdProduct._id,
				},
			});
		});
	} catch (error) {
		console.log(error, "something went wrong");
	}
};
