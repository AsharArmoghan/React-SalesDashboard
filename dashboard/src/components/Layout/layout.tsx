import React from "react";
import classes from "./layout.module.css";
import TopBar from "../TopBar/TopBar";
import NavBar from "../Navbar/navBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

	return (
		<div className={`${classes.home_main} bg-slate-50 dark:bg-slate-900 transition-colors duration-300`}>
			<div className={`${classes.topBar} bg-slate-50 dark:bg-slate-900`}>
				<TopBar onMenuClick={() => setMobileNavOpen(!mobileNavOpen)} />
			</div>
			<div className={`${classes.navBar} bg-slate-50 dark:bg-slate-900`}>
				<NavBar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
			</div>
			<div className={`${classes.content} bg-slate-50 dark:bg-slate-900`}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
