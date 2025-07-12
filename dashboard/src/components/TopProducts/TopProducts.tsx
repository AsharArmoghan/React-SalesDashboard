import React from "react";
import ProgressBar from "./ProgressBar";
import classes from "./top_products.module.css";
const TopProducts: React.FC = () => {
	return (
		<div className={classes.top_products}>
			<h5> TopProducts</h5>
			<div className={classes.product_list}>
				<div className={classes.product_title}>
					<span>#</span>
					<span>1 </span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
				</div>
				<div className={classes.product_name}>
					<span>Name</span>

					<span>Home Decore Range</span>

					<span>Disney Princess Pink Bag 18'</span>

					<span>Bathroom Essentials</span>

					<span>Apple Smartwatches</span>
				</div>
				<div className={classes.product_poularity}>
					<span>Popularity</span>
					<ProgressBar value={60} color={"rgba(0, 149, 255, 1)"} />
					<ProgressBar value={50} color='rgba(0, 224, 150, 1)' />
					<ProgressBar value={30} color='rgba(136, 77, 255, 1)' />
					<ProgressBar value={70} color='rgba(255, 143, 13, 1)' />
				</div>
				<div className={classes.product_sales}>
					<span>Sales</span>
					<div
						style={{
							border: "2.5px solid rgba(0, 149, 255, 1)",
							backgroundColor: "rgba(0, 149, 255, 0.1)",
							color: "rgba(0, 149, 255, 1)",
						}}
					>
						<span>45</span>
					</div>
					<div
						style={{
							border: "2.5px solid rgba(0, 224, 150, 1) ",
							backgroundColor: "rgba(0, 224, 150, 0.1)",
							color: "rgba(0, 224, 150, 1)",
						}}
					>
						<span>29</span>
					</div>
					<div
						style={{
							border: "2.5px solid rgba(136, 77, 255, 1) ",
							backgroundColor: "rgba(136, 77, 255, 0.1)",
							color: "rgba(136, 77, 255, 1)",
						}}
					>
						<span>17</span>
					</div>
					<div
						style={{
							border: "2.5px solid rgba(255, 143, 13, 1) ",
							backgroundColor: "rgba(255, 143, 13, 0.1)",
							color: "rgba(255, 143, 13, 1)",
						}}
					>
						<span>26</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TopProducts;
