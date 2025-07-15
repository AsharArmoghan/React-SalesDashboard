import React from "react";
import classes from "./targetvsReality.module.css";
import logos from "../../Asset/logo";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useProductContext } from "@/Hooks/useProducts";
Chart.register(...registerables);

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const realityMap = Array(12).fill(0);
const targetMap = Array(12).fill(0);

const chartData = {
	labels: monthNames,
	datasets: [
		{
			label: "Reality Sales",
			data: realityMap,
			backgroundColor: "#4AB58E",
		},
		{
			label: "Target Sales",
			data: targetMap,
			backgroundColor: "#FFCF00",
		},
	],
};
const option = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		legend: { display: true },
	},
	scales: {
		x: {
			scaleLabel: {
				display: true,
			},
			ticks: { maxTicksLimit: 5 },
		},
		y: {
			display: false,
		},
	} as any,
};
const TargetvsReality: React.FC = () => {
	const { dashboard } = useProductContext();
	let targetSales = 0;
	let realitySales = 0;
	dashboard.forEach(entry => {
		const date = new Date(entry.createdAt);
		const monthIndex = date.getMonth();
		const value = entry.amount_spent || 0;
		const type = entry.service_type;

		if (type === "Target Sales") {
			targetMap[monthIndex] += value;
		} else if (type === "Reality Sales") {
			realityMap[monthIndex] += value;
		}
	});

	dashboard.forEach(entry => {
		const value = entry.amount_spent || 0;

		if (entry.service_type === "Target Sales") {
			targetSales += value;
		} else if (entry.service_type === "Reality Sales") {
			realitySales += value;
		}
		return { targetSales, realitySales };
	});
	return (
		<div className={classes.main_container}>
			<span className={classes.title}>Target vs Reality</span>
			<Bar className={classes.barChart} data={chartData} options={option} />

			<div className={classes.target_legends}>
				<div className={classes.legends}>
					<div className={classes.sales_container}>
						<img src={logos.realSales} alt='realSales' />
						<div className={classes.legend_title}>
							<span>Real Sales</span>
							<span className={classes.low_text}>Global</span>
						</div>
					</div>
					<span
						style={{
							fontFamily: "Poppins",
							fontSize: "14px",
							fontWeight: "200",
							lineHeight: "10px",
							color: "#27AE60",
							padding: "2rem",
						}}
					>
						{realitySales}
					</span>
				</div>
				<div className={classes.legends}>
					<div className={classes.sales_container}>
						<img src={logos.targetSales} alt='' />
						<div className={classes.legend_title}>
							<span>Target Sales</span>
							<span className={classes.low_text}>Commercial</span>
						</div>
					</div>
					<span
						style={{
							fontFamily: "Poppins",
							fontSize: "14px",
							fontWeight: "200",
							lineHeight: "10px",
							color: "#FFA412",
							padding: "2rem",
						}}
					>
						{targetSales}
					</span>
				</div>
			</div>
		</div>
	);
};
export default TargetvsReality;
