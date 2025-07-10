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
						<img src={logo.graphLogo} alt='graph_logo' width={37} height={37} />
						<p>DashBoard</p>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink to={"/board"} className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)}>
						<img src={logo.leaderIcon} alt='graph_logo' width={37} height={37} />
						<p>LeaderBoard</p>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)} to={"/orders"}>
						<img src={logo.cartLogo} alt='graph_logo' width={37} height={37} />
						<p>Order</p>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)} to={"/products"}>
						<img src={logo.productLogo} alt='graph_logo' width={37} height={37} />
						<p>Products</p>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)} to={"/sales"}>
						<img src={logo.salesIcon} alt='graph_logo' width={37} height={37} />
						<p>Sales Report</p>
					</NavLink>
				</li>
				<li className={classes.nav_items}>
					<NavLink
						className={({ isActive }) => (isActive ? classes.activeNavLink : classes.nav_link)}
						onClick={handleLogout}
						to={"/login"}
					>
						<img src={logo.signoutIcon} alt='graph_logo' width={37} height={37} />
						<p>LogOut</p>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
