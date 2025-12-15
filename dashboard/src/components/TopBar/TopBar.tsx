import React, { useState, useRef } from "react";
import classes from "./TopBar.module.css";
import { useAuth } from "@/Context/AuthContext";
import { NavLink } from "react-router-dom";
import { useProductContext } from "@/Hooks/useProducts";
import { useTheme } from "@/Context/ThemeContext";
import { AnimatedButton } from "../AnimatedButton";
import logos from "@/Asset/logo";

interface TopBarProps {
	onMenuClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const { logOut } = useAuth();
	const { refreshAll, loading } = useProductContext();
	const { theme, toggleTheme } = useTheme();

	return (
		<nav className={`${classes.main_container} bg-slate-50 dark:bg-slate-900 rounded-xl shadow`}>
			<div className={`${classes.container} mx-auto w-full px-2  sm:px-6 lg:px-8`}>
				<div className={`${classes.header_content} relative flex h-20 w-full items-center justify-between`}>
					<div className={`${classes.logo_section} flex flex-1 items-center gap-2`}>
						<button
							type='button'
							className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-800 dark:text-stone-200 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none'
							onClick={onMenuClick}
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='block h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						</button>
						<div className={`${classes.logo}`}>
							<p className='text-3xl md:text-4xl font-semibold text-stone-800 dark:text-stone-200 font-[poppins]'>Dashboard</p>
						</div>
					</div>
					<div className={`${classes.actions_section} flex mx-2 rounded-full items-center justify-end gap-2 md:gap-4`}>
						<AnimatedButton onClick={refreshAll} disabled={loading} className={`${classes.refresh_btn}rounded-full`}>
							<span className='sr-only'>Refresh data</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2.5}
								stroke='currentColor'
								className={`${classes.icon} size-6 text-slate-500 ${loading ? classes.spin : ""}`}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
								/>
							</svg>
						</AnimatedButton>

						<button
							type='button'
							className={`${classes.notification_btn} rounded-full bg-white p-0.5 mx-2 md:p-1 text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-white focus:ring-offset-2`}
						>
							<span className='sr-only'>View notifications</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
								fill='black'
								aria-hidden='false'
								className='size-4 md:size-6'
							>
								<path d='M224 0c-13.3 0-24 10.7-24 24l0 9.7C118.6 45.3 56 115.4 56 200l0 14.5c0 37.7-10 74.7-29 107.3L5.1 359.2C1.8 365 0 371.5 0 378.2 0 399.1 16.9 416 37.8 416l372.4 0c20.9 0 37.8-16.9 37.8-37.8 0-6.7-1.8-13.3-5.1-19L421 321.7c-19-32.6-29-69.6-29-107.3l0-14.5c0-84.6-62.6-154.7-144-166.3l0-9.7c0-13.3-10.7-24-24-24zM392.4 368l-336.9 0 12.9-22.1C91.7 306 104 260.6 104 214.5l0-14.5c0-66.3 53.7-120 120-120s120 53.7 120 120l0 14.5c0 46.2 12.3 91.5 35.5 131.4L392.4 368zM156.1 464c9.9 28 36.6 48 67.9 48s58-20 67.9-48l-135.8 0z' />
							</svg>
						</button>
						<div className={`${classes.profile_menu} relative`} ref={menuRef}>
							<div>
								<button
									type='button'
									className={`${classes.profile_btn} relative flex rounded-full bg-gray-800 text-sm focus:outline-none`}
									id='user-menu-button'
									aria-expanded={menuOpen}
									aria-haspopup='true'
									onClick={() => setMenuOpen(open => !open)}
								>
									<span className='sr-only'>Open user menu</span>
									<img
										className={`${classes.profile_image} size-8 md:size-10 rounded-full`}
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt='User profile'
									/>
								</button>
							</div>
							{menuOpen && (
								<div
									className={`${classes.dropdown_menu} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-full bg-surface-white dark:bg-surface-dark py-1 shadow-lg ring-1 ring-black/5`}
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='user-menu-button'
									tabIndex={-1}
								>
									<AnimatedButton
										onClick={toggleTheme}
										className={`${classes.theme_btn} flex items-center block w-40 rounded-lg px-2 py-2 text-left text-sm hover:bg-gray-100  dark:hover:bg-slate-600 `}
									>
										<span className='sr-only'>Toggle Theme</span>
										{theme === "dark" ? (
											<div className='flex items-center gap-2'>
												<img src={logos.sunIcon} alt='Sun Icon' className='size-6' />
												<div className='text-base  antialiased text-slate-800 dark:text-slate-200 font-normal tracking-tighter dark:text-gray-300'>
													Light Mode
												</div>
											</div>
										) : (
											<div className='flex items-center gap-2'>
												<img src={logos.moonIcon} alt='Moon Icon' className='size-6' />
												<div className='text-base  antialiased text-slate-800 dark:text-slate-200 font-normal tracking-tighter dark:text-gray-300'>
													Dark Mode
												</div>
											</div>
										)}
									</AnimatedButton>
									<button
										className='block w-full px-4 py-2 text-left text-sm  hover:bg-gray-100 dark:hover:bg-slate-600'
										role='menuitem'
										tabIndex={-1}
									>
										<div className=' text-base  antialiased text-slate-800 dark:text-slate-200 font-normal tracking-tighter mt-2 dark:text-gray-300'>
											Your Profile
										</div>
									</button>
									<button
										className='block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-slate-600'
										role='menuitem'
										tabIndex={-1}
									>
										<div className='antialiased text-base text-slate-800 dark:text-slate-200 font-normal tracking-tighter mt-2 dark:text-gray-300'>
											Settings
										</div>
									</button>
									<NavLink
										to={"/login"}
										onClick={logOut}
										className='block w-full px-4 py-2 text-sm text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-600 no-underline'
										role='menuitem'
										tabIndex={-1}
									>
										<div className=' text-base  antialiased font-normal tracking-tighter mt-2 dark:text-gray-300'>
											Log out
										</div>
									</NavLink>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default TopBar;
