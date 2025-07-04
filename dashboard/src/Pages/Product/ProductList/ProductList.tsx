import React, { useState } from "react";
import classes from "./productList.module.css";
// import { useProductContext } from "../../../Hooks/useProducts";
// import { useAuth } from "@/Context/AuthContext";

import Table from "../ProductTable/productTable";

interface ProductListProps {
	Id: string;
	title: string;
	description: string;
	price: string;
	category: string;
}

const ProductList: React.FC<ProductListProps> = () => {
	const [products, setProducts] = useState([]);
	// const { state } = useAuth();

	const getProducts = async () => {
		const api = "https://fakestoreapi.com/products";
		const response = await fetch(`${api}?limit=10&skip=0`);
		const json = await response.json();
		setProducts(json);
	};
	getProducts();

	return (
		<div className={classes.products}>
			<div className={classes.table}>
				<Table data={products} />
			</div>
			{/* <table className={classes.list}>
				<tbody className={classes.tbody}>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Category</th>
						<th>Desribtion</th>
					</tr>
					{products &&
						products.map((item, index) => {
							return (
								<tr key={index}>
									<th>{item.title}</th>
									<th>{item.price}</th>
									<th>{item.category}</th>
									<th>{item.description}</th>
								</tr>
							);
						})}
				</tbody>
			</table> */}
		</div>
	);
};

export default ProductList;
