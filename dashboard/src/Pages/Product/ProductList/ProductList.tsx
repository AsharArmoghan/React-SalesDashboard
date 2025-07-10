import React from "react";
import classes from "./productList.module.css";
// import { useProductContext } from "../../../Hooks/useProducts";
// import { useAuth } from "@/Context/AuthContext";
import { useProductContext } from "@/Hooks/useProducts";

import Table from "../ProductTable/productTable";

// interface ProductListProps {
// 	Id: string;
// 	title: string;
// 	description: string;
// 	price: string;
// 	category: string;
// }

const ProductList: React.FC = () => {
	const { products } = useProductContext();

	return (
		<div className={classes.products}>
			<div className={classes.table}>
				<Table data={products} />
			</div>
		</div>
	);
};

export default ProductList;
