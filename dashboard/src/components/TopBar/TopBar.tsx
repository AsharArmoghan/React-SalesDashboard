import React, { useState, useRef, useEffect } from "react";
import classes from "./TopBar.module.css";
import logo from "../../Asset/logo";
import { useAuth } from "@/Context/AuthContext";
import { NavLink } from "react-router-dom";

const TopBar: React.FC = () => {
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
		<nav className='bg-white shadow'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-20 items-center justify-between'>
					<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='flex shrink-0 items-center'>
							<p className='text-4xl font-semibold leading-tight text-gray-800 font-[poppins]'>Dashboard</p>
						</div>
					</div>
					<div className='absolute inset-y-0 right-0  flex flex-row  justify-end  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<button
							type='button'
							className='relative left-10 rounded-full bg-white p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'
						>
							<span className='absolute -inset-1.5'></span>
							<span className='sr-only'>View notifications</span>
							<svg
								className='size-9'
								fill='yellow'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								aria-hidden='true'
								data-slot='icon'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
								/>
							</svg>
						</button>
						<div className='relative left-12 ml-5 ' ref={menuRef}>
							<div>
								<button
									type='button'
									className='relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800'
									id='user-menu-button'
									aria-expanded={menuOpen}
									aria-haspopup='true'
									onClick={() => setMenuOpen(open => !open)}
								>
									<span className='absolute -inset-1.5'></span>
									<span className='sr-only'>Open user menu</span>
									<img
										className='size-10 rounded-full'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
									/>
								</button>
							</div>
							{menuOpen && (
								<div
									className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden no-underline'
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='user-menu-button'
									tabIndex={-1}
								>
									<a
										href='#'
										className='block px-4 py-2 text-base text-gray-700 no-underline'
										role='menuitem'
										tabIndex={-1}
										id='user-menu-item-0'
									>
										Your Profile
									</a>
									<a
										href='#'
										className='block px-4 py-2 text-base text-gray-700 no-underline'
										role='menuitem'
										tabIndex={-1}
										id='user-menu-item-1'
									>
										Settings
									</a>
									<NavLink
										to={"/login"}
										onClick={logOut}
										className='block px-4 py-2 text-base text-gray-700 no-underline'
										role='menuitem'
										tabIndex={-1}
										id='user-menu-item-2'
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
