import React, { useLayoutEffect, useRef } from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "@/Asset/logo";
import { useAuth } from "@/Context/AuthContext";
import { motion } from "framer-motion";
import gsap from "gsap";

interface NavBarProps {
	mobileNavOpen?: boolean;
	setMobileNavOpen?: (open: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ mobileNavOpen, setMobileNavOpen }) => {
	const { logOut } = useAuth();
	const navRef = useRef<HTMLElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(navRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });

			gsap.fromTo(
				".nav-item-animate",
				{ opacity: 0, x: -20 },
				{ opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "back.out(1.7)" }
			);
		}, navRef);

		return () => ctx.revert();
	}, []);

	const handleLinkClick = () => {
		if (setMobileNavOpen) setMobileNavOpen(false);
	};

	const handleLogout = () => {
		logOut();
		handleLinkClick();
	};

	const navItemVariants = {
		hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } as const },
		tap: { scale: 0.95 },
	};

	return (
		<>
			{/* Mobile Backdrop */}
			{mobileNavOpen && (
				<div className='fixed inset-0 bg-black/50 z-40 md:hidden' onClick={() => setMobileNavOpen?.(false)} aria-hidden='true' />
			)}

			<nav
				ref={navRef}
				className={`${classes.navbar} ${mobileNavOpen ? classes.open : ""}
				fixed md:static left-0 top-0 h-screen md:h-full
			  w-36
				bg-slate-50 dark:bg-slate-900 border-r border-slate-400 dark:border-slate-500 z-50
				transition-colors duration-300
			`}
				id='navbar'
			>
				{/* Mobile Close Button */}
				<div className='md:hidden flex justify-end p-4'>
					<button
						onClick={() => setMobileNavOpen?.(false)}
						className='text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200'
					>
						<span className='sr-only'>Close menu</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
						</svg>
					</button>
				</div>

				<ul
					ref={listRef}
					className={`${classes.navbar_nav} w-full flex flex-col justify-center items-center mt-5 md:justify-center py-6 md:pt-0 gap-2 md:gap-4`}
				>
					<motion.li
						variants={navItemVariants}
						whileHover='hover'
						whileTap='tap'
						className={`${classes.nav_items} w-full px-2 nav-item-animate`}
					>
						<NavLink
							to={"/home"}
							onClick={handleLinkClick}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-full transition-all duration-200`
							}
						>
							<img src={logo.graphLogo} alt='dashboard' className={`${classes.nav_icon} w-8 h-8 `} />
							<div
								className={`${classes.nav_text} hidden md:block text-base text-stone-800 antialiased font-normal tracking-tighter mt-2 dark:text-stone-200`}
							>
								Dashboard
							</div>
						</NavLink>
					</motion.li>

					<motion.li
						variants={navItemVariants}
						whileHover='hover'
						whileTap='tap'
						className={`${classes.nav_items} w-full px-2 nav-item-animate`}
					>
						<NavLink
							to={"/board"}
							onClick={handleLinkClick}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
						>
							<img src={logo.leaderIcon} alt='leaderboard' className={`${classes.nav_icon} w-8 h-8`} />
							<div
								className={`${classes.nav_text} hidden md:block text-base text-stone-800 antialiased font-normal tracking-tighter mt-2 dark:text-stone-200`}
							>
								LeaderBoard
							</div>
						</NavLink>
					</motion.li>

					<motion.li
						variants={navItemVariants}
						whileHover='hover'
						whileTap='tap'
						className={`${classes.nav_items} w-full px-2 nav-item-animate`}
					>
						<NavLink
							to={"/orders"}
							onClick={handleLinkClick}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
						>
							<img src={logo.cartLogo} alt='orders' className={`${classes.nav_icon} w-8 h-8 `} />
							<div
								className={`${classes.nav_text} hidden md:block text-base text-stone-800 antialiased font-normal tracking-tighter mt-2 dark:text-stone-200`}
							>
								Orders
							</div>
						</NavLink>
					</motion.li>

					<motion.li
						variants={navItemVariants}
						whileHover='hover'
						whileTap='tap'
						className={`${classes.nav_items} w-full px-2 nav-item-animate`}
					>
						<NavLink
							to={"/products"}
							onClick={handleLinkClick}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
						>
							<img src={logo.productLogo} alt='products' className={`${classes.nav_icon} w-8 h-8 `} />
							<div
								className={`${classes.nav_text} hidden md:block text-base text-stone-800 antialiased font-normal tracking-tighter mt-2 dark:text-stone-200`}
							>
								Products
							</div>
						</NavLink>
					</motion.li>

					<motion.li
						variants={navItemVariants}
						whileHover='hover'
						whileTap='tap'
						className={`${classes.nav_items} w-full px-2 nav-item-animate`}
					>
						<NavLink
							to={"/sales"}
							onClick={handleLinkClick}
							className={({ isActive }) =>
								`${classes.nav_link} ${
									isActive ? classes.activeNavLink : ""
								} w-full py-3 rounded-lg transition-all duration-200`
							}
						>
							<img src={logo.salesIcon} alt='sales' className={`${classes.nav_icon} w-8 h-8 `} />
							<div
								className={`${classes.nav_text} hidden md:block text-base text-stone-800 antialiased font-normal tracking-tighter mt-2 dark:text-stone-200`}
							>
								Sales
							</div>
						</NavLink>
					</motion.li>

					<motion.li
						variants={navItemVariants}
						whileHover='hover'
						whileTap='tap'
						className={`${classes.nav_items} w-full px-2 mt-auto mb-4 nav-item-animate`}
					>
						<NavLink
							to={"/login"}
							onClick={handleLogout}
							className={`${classes.nav_link} ${classes.logout_btn} w-full py-3 rounded-lg transition-all duration-200`}
						>
							<img src={logo.signoutIcon} alt='logout' className={`${classes.nav_icon} w-8 h-8 `} />
							<div
								className={`${classes.nav_text} hidden md:block text-base text-stone-800 antialiased font-normal tracking-tighter mt-2 dark:text-stone-200`}
							>
								Logout
							</div>
						</NavLink>
					</motion.li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
