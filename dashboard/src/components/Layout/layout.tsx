import React, { useState } from "react";
import classes from "./layout.module.css";
import TopBar from "../TopBar/TopBar";
import NavBar from "../Navbar/navBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	return (
		<div className={classes.home_main}>
			<TopBar onToggleNavbar={() => setIsNavbarOpen(!isNavbarOpen)} />
			<div className={classes.main}>
				<div className={classes.navBar}>
					<NavBar isOpen={isNavbarOpen} onClose={() => setIsNavbarOpen(false)} />
				</div>
				<div className={classes.content}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
