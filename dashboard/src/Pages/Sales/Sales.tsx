import React, { useEffect } from "react";
import classes from "./Sales.module.css";
import TopSales from "../../components/TopSales/TopSales";
import TopProducts from "../../components/TopProducts/TopProducts";
import TotalRevenue from "../../components/TopRevenue/TopRevenue";
import TargetvsReality from "../../components/TargetvsReality/TargetvsReality";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sales: React.FC = () => {
	const navigate = useNavigate();
	const { state } = useAuth();

	useEffect(() => {
		if (state.isAuthenticated === false) {
			return navigate("/login", { replace: true });
		}
	}, [state.isAuthenticated, navigate]);

	return (
		<div className={`${classes.sales_main} pt-4 pl-4 pr-4 bg-surface-white dark:bg-surface-dark`}>
			<div className={classes.topSales}>
				<TopSales />
			</div>
			<div className={classes.targetReality}>
				<TargetvsReality />
			</div>
			<div className={classes.topRevenue}>
				<TotalRevenue />
			</div>
			<div className={classes.topProducts}>
				<TopProducts />
			</div>
		</div>
	);
};

export default Sales;
