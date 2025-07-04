import React from "react";
import classes from "./layout.module.css";
import TopBar from "../TopBar/TopBar";
import NavBar from "../Navbar/navBar";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
	return (
		<div className={classes.home_main}>
			<div className={classes.topBar}>
				<TopBar />
			</div>
			<div className={classes.navBar}>
				<NavBar />
			</div>
			<div className={classes.main}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
