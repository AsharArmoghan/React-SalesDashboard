import React from 'react';
import classes from './TopRevenue.module.css';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const TotalRevenue: React.FC = () => {
	const data = {
		labels: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		],
		datasets: [
			{
				label: 'Online Sales',
				barPercentage: 0.5,
				labelColorBorderRadius: '20px',
				backgroundColor: 'rgba(0, 149, 255, 1)',
				hoverBackgroundColor:
					'rgba(0, 149, 255, 0.5)',
				data: [
					20000, 22000, 18000, 21000, 23000,
					22000, 24000,
				],
			},
			{
				label: 'Offline Sales',
				barPercentage: 0.5,
				labelColorBorderRadius: '20px',
				backgroundColor: 'rgba(0, 224, 150, 1)',
				hoverBackgroundColor:
					'rgba(0, 224, 150, 0.5)',
				data: [
					18000, 19000, 17000, 20000, 21000,
					19000, 22000,
				],
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
				position: 'top',
				align: 'center',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					color: '#000',
					boxWidth: 8,
					padding: 10,
				},
			},
		} as any,
	};

	return (
		<div className={classes.chart}>
			<h5>Total Revenue</h5>
			<Bar
				className={classes.barChart}
				data={data}
				options={options}
			/>
		</div>
	);
};

export default TotalRevenue;
