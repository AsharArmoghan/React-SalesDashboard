import React from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../Asset/logo";
import { useAuth } from "../../Context/AuthContext";
// import { useAuthContext } from "../../Context/AuthContext";

const NavBar: React.FC = () => {
	const { logOut } = useAuth();
	const handleLogout = () => {
		logOut();
	};
	return (
		<nav className={classes.navbar} id='navbar'>
			<ul className={classes.navbar_nav}>
				<li className={classes.nav_items}>
					<NavLink to={"/home"} className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)}>
						<img src={logo.graphLogo} width={40} alt='graph_logo' />
						<span>DashBoard</span>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink to={"/board"} className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)}>
						<img src={logo.leaderIcon} width={40} alt='graph_logo' />
						<span>LeaderBoard</span>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)} to={"/orders"}>
						<img src={logo.cartLogo} width={40} alt='graph_logo' />
						<span>Order</span>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)} to={"/products"}>
						<img src={logo.productLogo} width={40} alt='graph_logo' />
						<span>Products</span>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)} to={"/sales"}>
						<img src={logo.salesIcon} width={40} alt='graph_logo' />
						<span>Sales Report</span>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<button className={classes.signout}>
						<NavLink
							className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)}
							to={"/login"}
							onClick={handleLogout}
						>
							<img src={logo.signoutIcon} width={35} alt='graph_logo' />
							<span>LogOut</span>
						</NavLink>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
