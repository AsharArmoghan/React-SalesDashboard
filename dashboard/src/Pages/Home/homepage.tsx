import React, { useEffect } from "react";
import classes from "./homepage.module.css";
import TopSales from "../../components/TopSales/TopSales";
import VisitorInsights from "../../components/VisitorInsights/VisitorInsights";
import CustomerSatisfaction from "../../components/CustomerSatisfaction/CustomerSatisfaction";
import TargetvsReality from "../../components/TargetvsReality/TargetvsReality";
import TopProducts from "../../components/TopProducts/TopProducts";
import VolumeService from "../../components/VolumeVsServiceLevel/VolumeService";
import TotalRevenue from "../../components/TopRevenue/TopRevenue";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
// import SaleMap from "@/components/SalesMappingByCountry/SaleMap";

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { state } = useAuth();

	useEffect(() => {
		if (state.isAuthenticated === false) {
			alert("You have been Logout! Please Login Again  ");
			return navigate("/login", { replace: true });
		}
	}, [state.isAuthenticated, state.token, navigate]);

	return (
		<>
			<div className={classes.home_main}>
				<div className={`${classes.topSales} ${classes.large} ${classes.mobile}`}>
					<TopSales />
				</div>
				<div className={`${classes.visitorInsights} ${classes.large} ${classes.mobile}`}>
					<VisitorInsights />
				</div>
				<div className={`${classes.volumeService} ${classes.small} ${classes.mobile}`}>
					<VolumeService />
				</div>
				<div className={`${classes.customerSatisfaction} ${classes.small} ${classes.mobile}`}>
					<CustomerSatisfaction />
				</div>
				<div className={`${classes.topProducts} ${classes.small} ${classes.mobile}`}>
					<TopProducts />
				</div>
				<div className={`${classes.targetReality} ${classes.medium} ${classes.mobile}`}>
					<TargetvsReality />
				</div>
				<div className={`${classes.topRevenue} ${classes.medium} ${classes.mobile}`}>
					<TotalRevenue />
				</div>
			</div>
		</>
	);
};
export default Home;
