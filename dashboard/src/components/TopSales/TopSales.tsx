import React from 'react';
import classes from './TopSales.module.css';

const TopSales: React.FC = () => {
	return (
		<div className={classes.main_container}>
			<div className={classes.text}>
				<h4> TopSales</h4>
				<p>Sales Summary</p>
			</div>
			<div className={classes.container}>
				<div className={classes.TopSales}>
					<h4>$1k</h4>
					<p>Total Sales</p>
				</div>
				<div className={classes.TopOrder}>
					<h4>300</h4>
					<p>Total Orders</p>
				</div>
				<div className={classes.ProductSold}>
					<h4>5</h4>
					<p>Product Sold</p>
				</div>
				<div className={classes.NewCustomers}>
					<h4>8</h4>
					<p>New Customers</p>
				</div>
			</div>
		</div>
	);
};

export default TopSales;
