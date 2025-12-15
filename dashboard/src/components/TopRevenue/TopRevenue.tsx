import React from "react";
import classes from "./TopRevenue.module.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useProductContext } from "@/Hooks/useProducts";
import { useTheme } from "@/Context/ThemeContext";

Chart.register(...registerables);

const TotalRevenue: React.FC = () => {
	const { dashboard } = useProductContext();
	const { theme } = useTheme();
	if (!dashboard) return null;
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	const onlineMap: Record<string, number> = {};
	const offlineMap: Record<string, number> = {};
	days.forEach(day => {
		onlineMap[day] = 0;
		offlineMap[day] = 0;
	});

	dashboard.forEach(entry => {
		const day = entry.day_of_week;
		const channel = entry.sales_channel?.toLowerCase();
		const amount = entry.amount_spent || 0;

		if (days.includes(day)) {
			if (channel === "online") {
				onlineMap[day] += amount;
			} else if (channel === "offline") {
				offlineMap[day] += amount;
			}
		}
	});

	const onlineData = days.map(day => onlineMap[day]);
	const offlineData = days.map(day => offlineMap[day]);

	const data = {
		labels: days,
		datasets: [
			{
				label: "Online Sales",
				barPercentage: 0.5,
				labelColorBorderRadius: "20px",
				backgroundColor: "rgba(0, 149, 255, 1)",
				hoverBackgroundColor: "rgba(0, 149, 255, 0.5)",
				data: onlineData,
			},
			{
				label: "Offline Sales",
				barPercentage: 0.5,
				labelColorBorderRadius: "20px",
				backgroundColor: "rgba(0, 224, 150, 1)",
				hoverBackgroundColor: "rgba(0, 224, 150, 0.5)",
				data: offlineData,
			},
		],
	};

	const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
	const textColor = theme === "dark" ? "#9ca3af" : "#96a5b8";
	const legendColor = theme === "dark" ? "#e5e7eb" : "#000";

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				display: true,
				ticks: {
					maxTicksLimit: 5,
					color: textColor,
				},
				grid: {
					display: false,
				},
			},
			y: {
				display: true,
				min: 5000,
				max: 35000,
				ticks: {
					maxTicksLimit: 5,
					stepSize: 10000,
					color: textColor,
				},
				grid: {
					color: gridColor,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: "top",
				align: "center",
				labels: {
					usePointStyle: true,
					pointStyle: "circle",
					color: legendColor,
					boxWidth: 8,
					padding: 10,
					font: {
						family: "Poppins",
					},
				},
			},
		} as any,
	};

	return (
		<div className={`${classes.chart} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<h2 className='text-2xl pt-2 pl-4 font-semibold text-text-main-light dark:text-text-main-dark font-poppins'>Total Revenue</h2>
			<div className=' h-[18rem] pb-2'>
				<Bar className={`${classes.barChart}`} data={data} options={options} />
			</div>
		</div>
	);
};

export default TotalRevenue;
