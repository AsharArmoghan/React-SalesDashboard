import React from "react";
import classes from "./layout.module.css";
import TopBar from "../TopBar/TopBar";
import NavBar from "../Navbar/navBar";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
	return (
		<div className={classes.home_main}>
			<TopBar />
			<div className={classes.main}>
				<div className={classes.navBar}>
					<NavBar />
				</div>
				<div className={classes.content}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
