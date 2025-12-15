import React from "react";
import classes from "./volumeService.module.css";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import logos from "../../Asset/logo";
import { useProductContext } from "@/Hooks/useProducts";

import { useTheme } from "@/Context/ThemeContext";

const VolumeService: React.FC = () => {
	const { dashboard } = useProductContext();
	const { theme } = useTheme();

	if (!dashboard) return null;
	const serviceMap = {
		"First Volume": 0,
		"Second Services": 0,
	};
	const metric = "amount_spent";
	dashboard.forEach(entry => {
		const type = entry.service_type || "Unknown";
		const value = entry[metric] || 0;

		if (type in serviceMap) {
			serviceMap[type] += value;
		}
	});
	const labels = Object.keys(serviceMap);

	const values = Object.values(serviceMap);

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: metric.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
				barPercentage: 0.5,
				data: values,
				backgroundColor: "oklch(59.6% 0.145 163.225)",

				stack: "Stack 0",
			},
			{
				label: "Second Services",
				barPercentage: 0.5,
				data: values,
				backgroundColor: "oklch(54.6% 0.245 262.881)",

				stack: "Stack 0",
			},
		],
	};

	const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
	const textColor = theme === "dark" ? "#9ca3af" : "#96a5b8"; //

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			intersect: true,
		},
		scales: {
			x: {
				stacked: true,
				display: true,

				grid: {
					display: true,
					color: gridColor,
				},
				ticks: {
					color: textColor,
				},
			},
			y: {
				stacked: true,
				display: true,
				min: 0,
				max: 90000,
				grid: {
					display: true,
					color: gridColor,
				},
				ticks: {
					color: textColor,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};
	return (
		<div className={`${classes.main_container} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<h5 className='text-2xl pt-2 pl-4 font-semibold text-text-main-light dark:text-text-main-dark font-poppins'>
				Volume Vs Service Level
			</h5>
			<div className={`${classes.bar} pb-2`}>
				<Bar data={chartData} options={options} />
			</div>
			<div
				className={`${classes.legend} text-gray-400 dark:text-gray-500 font-poppins border-t-4 pt-6 border-gray-200 dark:border-gray-700`}
			>
				<div className={`${classes.last_month} border-r-4 pr-16 border-gray-200 dark:border-gray-700`}>
					<img src={logos.rectBlue} width={15} height={15} alt='ovalBlue' />
					<div className=' h-5'>
						<span>Vloume </span>
					</div>
				</div>
				<div className={`${classes.this_month} `}>
					<img src={logos.rectGreen} width={15} height={15} alt='ovalGreen' />
					<div className='h-5 '>
						<span>Services </span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default VolumeService;
