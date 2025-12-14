import React, { useState, useRef, useEffect } from "react";
import classes from "./TopBar.module.css";
import { useAuth } from "@/Context/AuthContext";
import { NavLink } from "react-router-dom";

interface TopBarProps {
	onToggleNavbar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleNavbar }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const { logOut } = useAuth();

	// Close menu when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
		}
		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<nav className={`${classes.main_container} bg-white shadow`}>
			<div className={`${classes.container} mx-auto w-full px-2 sm:px-6 lg:px-8`}>
				<div className={`${classes.header_content} relative flex h-20 w-full items-center justify-between`}>
					<div className={`${classes.logo_section} flex flex-1 items-center`}>
						{/* Mobile menu toggle button */}
						<button
							onClick={onToggleNavbar}
							className={`${classes.mobile_menu_toggle} md:hidden -ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none`}
							aria-label='Toggle navigation'
						>
							<svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						</button>
						<div className={`${classes.logo}`}>
							<p className='text-3xl md:text-4xl font-semibold text-gray-800 font-[poppins] truncate'>Dashboard</p>
						</div>
					</div>
					<div className={`${classes.actions_section} flex items-center justify-end gap-2 md:gap-4`}>
						<button
							type='button'
							className={`${classes.notification_btn} rounded-full bg-white p-1 text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-white focus:ring-offset-2`}
						>
							<span className='sr-only'>View notifications</span>
							<svg
								className='size-6 md:size-9'
								fill='yellow'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
								/>
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
									className={`${classes.dropdown_menu} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5`}
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='user-menu-button'
									tabIndex={-1}
								>
									<button
										className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
										role='menuitem'
										tabIndex={-1}
									>
										Your Profile
									</button>
									<button
										className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
										role='menuitem'
										tabIndex={-1}
									>
										Settings
									</button>
									<NavLink
										to={"/login"}
										onClick={logOut}
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline'
										role='menuitem'
										tabIndex={-1}
									>
										Sign out
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
