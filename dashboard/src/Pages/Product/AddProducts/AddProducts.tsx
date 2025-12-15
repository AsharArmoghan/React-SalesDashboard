import React, { useState } from "react";
import "./AddProducts.css";

interface product {
	name: string;
	description: string;
	price: number;
	quantityAvailable: number;
}

const AddProducts: React.FC = () => {
	const [formData, setFormData] = useState<product>({
		name: "",
		description: "",
		price: 0,
		quantityAvailable: 0,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		console.log("product data", formData);
		e.preventDefault();

		if (!formData.name || !formData.quantityAvailable || !formData.price) {
			<p className='bg-danger'>please enter fields</p>;
		}
	};

	return (
		<div className='container container-md bg-dark'>
			<h4>Add New Product</h4>
			<div className='form'>
				<form className='form-group' onSubmit={handleSubmit}>
					<label className='label'>Product Name :</label>
					<input type='text' className='form-control' name='name' placeholder='name' value={formData.name} onChange={handleChange} />
					<br />
					<label className='label'>Product Description :</label>
					<input
						type='text'
						className='form-control'
						name='description'
						placeholder='Description'
						onChange={handleChange}
						value={formData.description}
					/>
					<br />
					<label className='label'>Price :</label>
					<input
						type='text'
						className='form-control'
						name='price'
						placeholder='Dollar'
						onChange={handleChange}
						value={formData.price}
					/>
					<br />
					<label className='label'>Quantity Available :</label>
					<input
						type='text'
						className='form-control'
						name='quantityAvailable'
						placeholder='Items left'
						onChange={handleChange}
						value={formData.quantityAvailable}
					/>
					<br />
					<button type='submit' className='btn btn-primary'>
						Upload
					</button>
				</form>
				form : {formData.name},{formData.description} ,{formData.price}
			</div>
		</div>
	);
};

export default AddProducts;
