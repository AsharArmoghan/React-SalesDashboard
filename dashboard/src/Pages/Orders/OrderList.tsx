import React from "react";
// import TopRevenue from "../Homepage/TopRevenue/TopRevenue";

import Table from "./orderTable";
import classes from "./orderList.module.css";
import data from "./orderList.json";

// interface orderProps {
// 	orders: {
// 		orderId: string;
// 		userId: string;
// 		products: {
// 			productId: string;
// 			quantity: number;
// 		}[];
// 		orderDate: string;
// 	}[];
// }

const OrderList: React.FC = () => {
	// const [orders,setOrders]= useState([])

	return (
		<div className={classes.products}>
			<div className={classes.table}>
				<Table data={data} />
			</div>
		</div>
	);
};
export default OrderList;
