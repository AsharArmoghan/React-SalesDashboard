import React, { useEffect } from "react";
// import NavBar from "../../components/Navbar/navBar";
import classes from "./homepage.module.css";
// import TopBar from "../../components/TopBar/TopBar";
import TopSales from "../../components/TopSales/TopSales";
import VisitorInsights from "../../components/VisitorInsights/VisitorInsights";
import CustomerSatisfaction from "../../components/CustomerSatisfaction/CustomerSatisfaction";
import TargetvsReality from "../../components/TargetvsReality/TargetvsReality";
// import SaleMap from "./SalesMappingByCountry/SaleMap";
import TopProducts from "../../components/TopProducts/TopProducts";
import VolumeService from "../../components/VolumeVsServiceLevel/VolumeService";
import TotalRevenue from "../../components/TopRevenue/TopRevenue";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

// import { useAuthContext } from "../../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { percentageProps } from './TopProducts/TopProducts';

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
				{/* <div className={classes.topBar}>
					<TopBar />
				</div>
				<div className={classes.navBar}>
					<NavBar />
				</div> */}

				<div className={classes.charts_main}>
					<div className={classes.topSales}>
						<TopSales />
					</div>
					<div className={classes.visitorInsights}>
						<VisitorInsights />
					</div>
					<div className={classes.second_grid}>
						<div className={classes.topRevenue}>
							<TotalRevenue />
						</div>
						<div className={classes.customerSatisfaction}>
							<CustomerSatisfaction />
						</div>
						<div className={classes.targetReality}>
							<TargetvsReality />
						</div>

						<div className={classes.topProducts}>
							<TopProducts />
						</div>
						<div className={classes.saleMap}>{/* <SaleMap /> */}</div>
						<div className={classes.volumeService}>
							<VolumeService />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Home;
