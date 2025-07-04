import React from 'react';
import classes from './VisitorInsights.module.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// interface LineChartProps {
// 	data: {
// 		labels: string[];
// 		datasets: {
// 			label: string;
// 			data: number[];
// 			fill?: boolean;
// 			borderColor: string;
// 			tension: number;
// 		}[];
// 	};
// }

const chartData = {
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	],
	datasets: [
		{
			label: 'Loyal Customer',
			data: [165, 259, 280, 281, 256, 255, 240, 265, 259, 280, 250, 260],
			fill: false,
			borderColor: 'rgba(167, 0, 255, 1)',
			tension: 0.4,
		},
		{
			label: 'New Customer',
			data: [130, 250, 260, 255, 259, 245, 230, 260, 255, 399, 250, 260],
			fill: false,
			borderColor: 'rgba(239, 68, 68, 1)',
			tension: 0.4,
		},
		{
			label: 'Unique Customer',
			data: [160, 270, 240, 271, 266, 235, 240, 245, 271, 300, 250, 260],
			fill: false,
			borderColor: 'rgba(60, 216, 86, 1)',
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
				display: false,
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
			display: false,
		},
	},
};

const LineChart: React.FC = () => {
	return (
		<div className={classes.main_container}>
			<h5>Visitor Insights</h5>
			<Line
				className={classes.Line}
				data={chartData}
				options={option}
			/>
		</div>
	);
};

export default LineChart;
