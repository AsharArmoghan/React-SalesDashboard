import React from "react";
import classes from "./VisitorInsights.module.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useProductContext } from "@/Hooks/useProducts";
Chart.register(...registerables);

const LineChart: React.FC = () => {
	const { dashboard } = useProductContext();
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const monthMap = {};

	dashboard.forEach(entry => {
		const monthIndex = new Date(entry.createdAt).getMonth();
		if (!monthMap[monthIndex]) {
			monthMap[monthIndex] = {
				loyal: 0,
				new: 0,
				unique: 0,
			};
		}

		monthMap[monthIndex].loyal += entry.is_loyal || 0;
		monthMap[monthIndex].new += entry.is_new || 0;
		monthMap[monthIndex].unique += entry.is_unique || 0;
	});
	const labels = Object.keys(monthMap)
		.map(Number)
		.sort((a, b) => a - b)
		.map(i => monthNames[i]);
	const loyalData = [];
	const newData = [];
	const uniqueData = [];

	Object.keys(monthMap)
		.map(Number)
		.sort((a, b) => a - b)
		.forEach(i => {
			loyalData.push(monthMap[i].loyal);
			newData.push(monthMap[i].new);
			uniqueData.push(monthMap[i].unique);
		});

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Loyal Customer",
				data: loyalData,
				fill: false,
				borderColor: "rgba(167, 0, 255, 1)",
				tension: 0.4,
			},
			{
				label: "New Customer",
				data: newData,
				fill: false,
				borderColor: "rgba(239, 68, 68, 1)",
				tension: 0.4,
			},
			{
				label: "Unique Customer",
				data: uniqueData,
				fill: false,
				borderColor: "rgba(60, 216, 86, 1)",
				tension: 0.4,
			},
		],
	};
	const option = {
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			x: {
				display: true,
				grid: {
					display: true,
				},
			},
			y: {
				display: true,
				suggestedMin: 0,
				suggestedMax: 400,
			},
		},
		plugins: {
			legend: {
				display: true,
			},
		},
	};

	return (
		<div className={classes.main_container}>
			<h5>Visitor Insights</h5>
			<div className={classes.Line}>
				<Line data={chartData} options={option} />
			</div>
		</div>
	);
};

export default LineChart;
