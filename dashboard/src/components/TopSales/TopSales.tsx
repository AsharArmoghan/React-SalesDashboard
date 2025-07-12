import React from "react";
import classes from "./TopSales.module.css";
import { useProductContext } from "@/Hooks/useProducts";

const TopSales: React.FC = () => {
	const { orders, products } = useProductContext();
	const totalSales = Math.round(orders.reduce((acc, order) => acc + order.total, 0));
	const formattedSales = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(totalSales);
	const totalOrders = orders.length;
	const totalProductsSold = orders.reduce((acc, product) => acc + product.totalQuantity, 0);
	const newCustomers = orders.reduce((accumulator, cart) => {
		accumulator.add(cart.userId);
		return accumulator;
	}, new Set()).size;

	return (
		<div className={classes.main_container}>
			<div className={classes.text}>
				<h4> TopSales</h4>
				<p>Sales Summary</p>
			</div>
			<div className={classes.container}>
				<div className={classes.TopSales}>
					<h4>{formattedSales}</h4>
					<p>Total Sales</p>
				</div>
				<div className={classes.TopOrder}>
					<h4>{totalOrders}</h4>
					<p>Total Orders</p>
				</div>
				<div className={classes.ProductSold}>
					<h4>{totalProductsSold}</h4>
					<p>Product Sold</p>
				</div>
				<div className={classes.NewCustomers}>
					<h4>{newCustomers}</h4>
					<p>New Customers</p>
				</div>
			</div>
		</div>
	);
};

export default TopSales;
