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
		Product.findById(req.param.Id).then(result => {
			if (!result) res.status(404).json({ message: "User Not Found!" });
			res.status(200).json(result);
			console.log(result);
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
	// let product = { name: "Mobile", description: "iphone", price: "80,000", quantityAvailable: 100 };
	// res.status(200).json(product);
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
