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
import { HeroSection } from "../../components/HeroSection";

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
			<div className={`${classes.home_main} bg-surface-light dark:bg-surface-dark `}>
				<div className='w-full col-span-full mb-8'>
					<HeroSection />
				</div>
				<div className={`${classes.topSales} ${classes.large}`}>
					<TopSales />
				</div>
				<div className={`${classes.visitorInsights} ${classes.large}`}>
					<VisitorInsights />
				</div>
				<div className={`${classes.volumeService} ${classes.small}`}>
					<VolumeService />
				</div>
				<div className={`${classes.customerSatisfaction} ${classes.small}`}>
					<CustomerSatisfaction />
				</div>
				<div className={`${classes.topProducts} ${classes.small}`}>
					<TopProducts />
				</div>
				<div className={`${classes.targetReality} ${classes.medium}`}>
					<TargetvsReality />
				</div>
				<div className={`${classes.topRevenue} ${classes.medium}`}>
					<TotalRevenue />
				</div>
			</div>
		</>
	);
};
export default Home;
