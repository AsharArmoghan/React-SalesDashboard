import React, { useEffect } from "react";
import classes from "./LeaderBoard.module.css";
import TopProducts from "../../components/TopProducts/TopProducts";
import TopSales from "../../components/TopSales/TopSales";
import TotalRevenue from "../../components/TopRevenue/TopRevenue";
import CustomerSatisfaction from "../../components/CustomerSatisfaction/CustomerSatisfaction";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LeaderBoard: React.FC = () => {
	const navigate = useNavigate();
	const { state } = useAuth();

	useEffect(() => {
		if (state.isAuthenticated === false) {
			return navigate("/login", { replace: true });
		}
	}, [state.isAuthenticated, navigate]);

	return (
		<div className={`${classes.board_main} pt-4 pl-4 pr-4 bg-surface-white dark:bg-surface-dark`}>
			<div className={classes.customerSatisfaction}>
				<CustomerSatisfaction />
			</div>
			<div className={classes.topProducts}>
				<TopProducts />
			</div>
			<div className={classes.topSales}>
				<TopSales />
			</div>
			<div className={classes.totalRevenue}>
				<TotalRevenue />
			</div>
		</div>
	);
};

export default LeaderBoard;
