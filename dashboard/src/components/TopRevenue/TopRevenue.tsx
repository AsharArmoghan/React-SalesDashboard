import React from "react";
import classes from "./TopRevenue.module.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useProductContext } from "@/Hooks/useProducts";
Chart.register(...registerables);

const TotalRevenue: React.FC = () => {
	const { dashboard } = useProductContext();
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	// Initialize maps for each day
	const onlineMap = {};
	const offlineMap = {};
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
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			x: {
				display: true,
				ticks: {
					maxTicksLimit: 5,
				},
				grid: {
					display: false,
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
					color: "#000",
					boxWidth: 8,
					padding: 10,
				},
			},
		} as any,
	};

	return (
		<div className={classes.chart}>
			<h5>Total Revenue</h5>
			<Bar className={classes.barChart} data={data} options={options} />
		</div>
	);
};

export default TotalRevenue;
