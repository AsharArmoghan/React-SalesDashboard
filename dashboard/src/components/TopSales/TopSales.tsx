import React from "react";
import classes from "./TopSales.module.css";
import { useProductContext } from "@/Hooks/useProducts";

const TopSales: React.FC = () => {
	const { orders } = useProductContext();
	if (!orders) return null;
	const totalSales = Math.round(orders.reduce((acc, order) => acc + order.total, 0));
	const formattedSales = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(totalSales);
	const totalOrders = orders.length;
	const totalProductsSold = orders.reduce((acc, product) => acc + product.totalQuantity, 0);
	const newCustomers = orders.reduce((accumulator, cart) => {
		accumulator.add(cart.userId);
		return accumulator;
	}, new Set()).size;

	return (
		<div className={`${classes.main_container} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<div className={classes.text}>
				<h2 className='text-2xl md:text-3xl text-text-main-light tracking-wider leading-10 dark:text-text-main-dark font-semibold font-poppins'>
					Top Sales
				</h2>
				<p className='text-sm text-text-muted-light dark:text-text-muted-dark font-poppins'>Sales Summary</p>
			</div>
			<div className={classes.container}>
				<div className={`${classes.TopSales} bg-[#ffe2e5] dark:bg-red-900/20 transition-colors duration-300`}>
					<div className='bg-[#fa5a7d] p-2 md:p-3 rounded-full mb-2 md:mb-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='text-white'
						>
							<path d='M3 3v18h18' />
							<path d='m19 9-5 5-4-4-3 3' />
						</svg>
					</div>
					<h4 className='text-lg md:text-xl font-bold text-text-main-light dark:text-text-main-dark font-poppins'>{formattedSales}</h4>
					<p className='text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark font-poppins'>Total Sales</p>
				</div>
				<div className={`${classes.TopOrder} bg-[#fff4de] dark:bg-orange-900/20 transition-colors duration-300`}>
					<div className='bg-[#ff947a] p-2 md:p-3 rounded-full mb-2 md:mb-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='text-white'
						>
							<line x1='8' y1='6' x2='21' y2='6' />
							<line x1='8' y1='12' x2='21' y2='12' />
							<line x1='8' y1='18' x2='21' y2='18' />
							<line x1='3' y1='6' x2='3.01' y2='6' />
							<line x1='3' y1='12' x2='3.01' y2='12' />
							<line x1='3' y1='18' x2='3.01' y2='18' />
						</svg>
					</div>
					<h4 className='text-lg md:text-xl font-bold text-text-main-light dark:text-text-main-dark font-poppins'>{totalOrders}</h4>
					<p className='text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark font-poppins'>Total Orders</p>
				</div>
				<div className={`${classes.ProductSold} bg-[#dcfce7] dark:bg-green-900/20 transition-colors duration-300`}>
					<div className='bg-[#3cd856] p-2 md:p-3 rounded-full mb-2 md:mb-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='text-white'
						>
							<path d='m7.5 4.27 9 5.15' />
							<path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
							<path d='m3.3 7 8.7 5 8.7-5' />
							<path d='M12 22v-9' />
						</svg>
					</div>
					<h4 className='text-lg md:text-xl font-bold text-text-main-light dark:text-text-main-dark font-poppins'>
						{totalProductsSold}
					</h4>
					<p className='text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark font-poppins'>Product Sold</p>
				</div>
				<div className={`${classes.NewCustomers} bg-[#f3e8ff] dark:bg-purple-900/20 transition-colors duration-300`}>
					<div className='bg-[#bf83ff] p-2 md:p-3 rounded-full mb-2 md:mb-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='text-white'
						>
							<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
							<circle cx='9' cy='7' r='4' />
							<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
							<path d='M16 3.13a4 4 0 0 1 0 7.75' />
						</svg>
					</div>
					<h4 className='text-lg md:text-xl font-bold text-text-main-light dark:text-text-main-dark font-poppins'>{newCustomers}</h4>
					<p className='text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark font-poppins'>New Customers</p>
				</div>
			</div>
		</div>
	);
};

export default TopSales;
