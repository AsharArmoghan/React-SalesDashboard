import React, { useEffect } from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "@/Asset/logo";
import { useAuth } from "@/Context/AuthContext";

interface NavBarProps {
	isOpen: boolean;
	onClose: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, onClose }) => {
	const { logOut } = useAuth();

	const handleLogout = () => {
		logOut();
	};

	// Close navbar when clicking outside on mobile
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const navbar = document.getElementById("navbar");
			const toggleBtn = document.querySelector('[aria-label="Toggle navigation"]');
			if (isOpen && navbar && !navbar.contains(event.target as Node)) {
				// Check if click is not on the toggle button
				if (!toggleBtn?.contains(event.target as Node)) {
					onClose();
				}
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	return (
		<>
			{/* Mobile overlay backdrop */}
			{isOpen && <div className='fixed inset-0 bg-black bg-opacity-50 md:hidden z-20' onClick={onClose} aria-hidden='true' />}

			<nav
				className={`${classes.navbar} ${
					isOpen ? classes.expanded : ""
				} fixed md:static left-0 top-0 h-screen md:h-full w-20 md:w-36 lg:w-36 bg-white z-30`}
				id='navbar'
			>
				{/* Mobile close button */}
				<button
					onClick={onClose}
					className='md:hidden absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition'
					aria-label='Close navigation'
				>
					<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
					</svg>
				</button>

				<ul
					className={`${classes.navbar_nav} w-full flex flex-col justify-center items-center mt-5 md:justify-center py-6 md:pt-0 gap-2 md:gap-4`}
				>
					<li className={`${classes.nav_items} w-full px-2`}>
						<NavLink
							to={"/home"}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
							onClick={onClose}
						>
							<img src={logo.graphLogo} alt='dashboard' className={`${classes.nav_icon} w-7 h-7 md:w-9 md:h-9`} />
							<p className={`${classes.nav_text} hidden md:block text-xs lg:text-sm mt-2`}>Dashboard</p>
						</NavLink>
					</li>

					<li className={`${classes.nav_items} w-full px-2`}>
						<NavLink
							to={"/board"}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
							onClick={onClose}
						>
							<img src={logo.leaderIcon} alt='leaderboard' className={`${classes.nav_icon} w-7 h-7 md:w-9 md:h-9`} />
							<p className={`${classes.nav_text} hidden md:block text-xs lg:text-sm mt-2`}>LeaderBoard</p>
						</NavLink>
					</li>

					<li className={`${classes.nav_items} w-full px-2`}>
						<NavLink
							to={"/orders"}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
							onClick={onClose}
						>
							<img src={logo.cartLogo} alt='orders' className={`${classes.nav_icon} w-7 h-7 md:w-9 md:h-9`} />
							<p className={`${classes.nav_text} hidden md:block text-xs lg:text-sm mt-2`}>Orders</p>
						</NavLink>
					</li>

					<li className={`${classes.nav_items} w-full px-2`}>
						<NavLink
							to={"/products"}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
							onClick={onClose}
						>
							<img src={logo.productLogo} alt='products' className={`${classes.nav_icon} w-7 h-7 md:w-9 md:h-9`} />
							<p className={`${classes.nav_text} hidden md:block text-xs lg:text-sm mt-2`}>Products</p>
						</NavLink>
					</li>

					<li className={`${classes.nav_items} w-full px-2`}>
						<NavLink
							to={"/sales"}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
							onClick={onClose}
						>
							<img src={logo.salesIcon} alt='sales' className={`${classes.nav_icon} w-7 h-7 md:w-9 md:h-9`} />
							<p className={`${classes.nav_text} hidden md:block text-xs lg:text-sm mt-2`}>Sales</p>
						</NavLink>
					</li>

					<li className={`${classes.nav_items} w-full px-2 mt-auto mb-4`}>
						<NavLink
							to={"/login"}
							onClick={handleLogout}
							className={`${classes.nav_link} ${classes.logout_btn} w-full py-3 rounded-lg transition-all duration-200`}
						>
							<svg className='w-7 h-7 md:w-9 md:h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
								/>
							</svg>
							<p className={`${classes.nav_text} hidden md:block text-xs lg:text-sm mt-2`}>Logout</p>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
