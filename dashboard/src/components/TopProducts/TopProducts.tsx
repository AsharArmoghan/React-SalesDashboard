import React, { useMemo } from "react";
import ProgressBar from "./ProgressBar";
import classes from "./top_products.module.css";
import { useProductContext } from "@/Hooks/useProducts";

const TopProducts: React.FC = () => {
	const { products, orders } = useProductContext();
	const topProducts = useMemo(() => {
		if (!products) return [];
		return [...products].sort((a, b) => b.stock - a.stock).slice(0, 5);
	}, [products]);
	console.log("Top Products:", topProducts);
	const getColorByIndex = (index, opacity = 1) => {
		const colors = [
			`rgba(0, 149, 255, ${opacity})`,
			`rgba(0, 224, 150, ${opacity})`,
			`rgba(136, 77, 255, ${opacity})`,
			`rgba(255, 143, 13, ${opacity})`,
			`rgba(255, 0, 120, ${opacity})`, // extra for >4 products
		];
		return colors[index % colors.length];
	};
	return (
		<div className={classes.top_products}>
			<h5>Top Products</h5>
			<div className={classes.product_list}>
				<div className={classes.product_title}>
					<span>#</span>
					{topProducts.map((_, index) => (
						<span key={`index-${index}`}>{index + 1}</span>
					))}
				</div>
				<div className={classes.product_name}>
					<span>Brand</span>
					{topProducts.map((product, index) => (
						<span key={`title-${index}`}>{product.title}</span>
					))}
				</div>
				<div className={classes.product_poularity}>
					<span>Popularity</span>
					{topProducts.map((product, index) => (
						<ProgressBar key={`popularity-${index}`} value={product.rating} color={getColorByIndex(index)} />
					))}
				</div>
				<div className={classes.product_sales}>
					<span>Rating</span>
					{topProducts.map((order, index) => (
						<div
							key={`sales-${index}`}
							style={{
								border: `1.5px solid ${getColorByIndex(index)}`,
								backgroundColor: `${getColorByIndex(index, 0.1)}`,
								color: getColorByIndex(index),
								borderRadius: "30px",
							}}
						>
							<span>{order.rating}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default TopProducts;
