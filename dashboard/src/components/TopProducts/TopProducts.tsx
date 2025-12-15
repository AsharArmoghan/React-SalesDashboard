import React, { useMemo } from "react";
import ProgressBar from "./ProgressBar";
import classes from "./top_products.module.css";
import { useProductContext } from "@/Hooks/useProducts";

const TopProducts: React.FC = () => {
	const { products } = useProductContext();
	const topProducts = useMemo(() => {
		if (!products) return [];
		return [...products].sort((a, b) => b.stock - a.stock).slice(0, 5);
	}, [products]);
	const getColorByIndex = (index: number) => {
		const colors = [
			`oklch(71.5% 0.143 215.221 / 70%)`,
			`oklch(76.8% 0.233 130.85 / 70%)`,
			`oklch(60.6% 0.25 292.717 / 70%)`,
			`oklch(76.9% 0.188 70.08 / 70%)`,
			`oklch(64.5% 0.246 16.439 / 70%)`,
		];
		return colors[index % colors.length];
	};
	return (
		<div className={`${classes.top_products} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<h5 className='text-2xl pt-2 pl-4 font-semibold text-text-main-light dark:text-text-main-dark font-poppins'>Top Products</h5>
			<div className={classes.product_list}>
				<div className={`${classes.product_title} text-text-muted-light pb-2 dark:text-text-muted-dark font-poppins`}>
					<span>#</span>
					{topProducts.map((_, index) => (
						<span key={`index-${index}`}>{index + 1}</span>
					))}
				</div>
				<div className={`${classes.product_name} text-text-main-light pb-2 dark:text-text-main-dark font-poppins`}>
					<div className='font-medium text-text-main-light dark:text-text-main-dark font-poppins'>Brand</div>
					{topProducts.map((product, index) => (
						<div key={`title-${index}`} className='text-sm font-medium text-text-muted-light dark:text-text-muted-dark'>
							{product.title}
						</div>
					))}
				</div>
				<div className={`${classes.product_poularity} text-text-muted-light dark:text-text-muted-dark font-poppins`}>
					<div className='font-medium text-text-main-light dark:text-text-main-dark font-poppins'>Popularity</div>
					{topProducts.map((product, index) => (
						<ProgressBar key={`popularity-${index}`} value={product.rating} color={getColorByIndex(index)} />
					))}
				</div>
				<div className={`${classes.product_sales} text-text-muted-light dark:text-text-muted-dark font-poppins`}>
					<div className='font-medium text-text-main-light dark:text-text-main-dark font-poppins'>Rating</div>
					{topProducts.map((order, index) => (
						<div
							key={`sales-${index}`}
							style={{
								border: `1.5px solid ${getColorByIndex(index)}`,
								backgroundColor: `${getColorByIndex(index)}`,
								color: getColorByIndex(index),
								borderRadius: "30px",
							}}
						>
							<div className='text-sm font-medium text-text-main-light dark:text-text-main-dark font-poppins'>
								{order.rating}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default TopProducts;
