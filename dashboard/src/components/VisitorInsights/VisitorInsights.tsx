import React from "react";
import classes from "./VisitorInsights.module.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useProductContext } from "@/Hooks/useProducts";
import { useTheme } from "@/Context/ThemeContext";

Chart.register(...registerables);

const LineChart: React.FC = () => {
	const { dashboard } = useProductContext();
	const { theme } = useTheme();

	if (!dashboard) return null;
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const monthMap: Record<number, { loyal: number; new: number; unique: number }> = {};

	dashboard.forEach(entry => {
		if (!entry.createdAt) return;
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
	const loyalData: number[] = [];
	const newData: number[] = [];
	const uniqueData: number[] = [];

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
				borderColor: "oklch(54.1% 0.281 293.009)",
				tension: 0.4,
			},
			{
				label: "New Customer",
				data: newData,
				fill: false,
				borderColor: "oklch(57.7% 0.245 27.325)",
				tension: 0.4,
			},
			{
				label: "Unique Customer",
				data: uniqueData,
				fill: false,
				borderColor: "oklch(59.6% 0.145 163.225)",
				tension: 0.4,
			},
		],
	};

	const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
	const textColor = theme === "dark" ? "#e5e7eb" : "#374151";

	const option = {
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			x: {
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
				display: true,
				suggestedMin: 0,
				suggestedMax: 400,
				grid: {
					color: gridColor,
				},
				ticks: {
					color: textColor,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				labels: {
					color: textColor,
					font: {
						family: "Poppins",
					},
				},
			},
		},
	};

	return (
		<div className={`${classes.main_container} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<h5 className='text-2xl pt-2 pl-4 font-semibold  tracking-wider leading-10 text-text-main-light dark:text-text-main-dark font-poppins'>
				Visitor Insights
			</h5>
			<div
				className={`${classes.Line} text-xl font-poppins font-semibold tracking-wider leading-10 text-text-main-light dark:text-text-main-dark`}
			>
				<Line data={chartData} options={option} />
			</div>
		</div>
	);
};

export default LineChart;
