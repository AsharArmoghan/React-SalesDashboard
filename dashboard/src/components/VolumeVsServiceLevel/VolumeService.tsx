import React from "react";
import classes from "./volumeService.module.css";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import logos from "../../Asset/logo";
import data from "@/Asset/data/Dashboard.json";

const serviceMap = {
	"First Volume": 0,
	"Second Services": 0,
};
const metric = "amount_spent";
data.forEach(entry => {
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
			backgroundColor: "rgba(0, 224, 150, 1)",

			stack: "Stack 0",
		},
		{
			label: "Second Services",
			barPercentage: 0.5,
			data: values,
			backgroundColor: "rgba(0,149,255,1)",

			stack: "Stack 0",
		},
	],
};

const options = {
	responsive: true,
	maintainAspectRatio: true,
	interaction: {
		intersect: true,
	},
	scales: {
		x: {
			stacked: true,
			display: true,
		},
		y: {
			stacked: true,
			display: false,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};
const VolumeService: React.FC = () => {
	return (
		<div className={classes.main_container}>
			<h5>VolumeVsService Level</h5>
			<Bar className={classes.bar} data={chartData} options={options} />
			<div className={classes.legend}>
				<div className={classes.last_month}>
					<img src={logos.rectBlue} width={5} height={5} alt='ovalBlue' />
					<div className=' h-5'>
						<span>Vloume </span>
					</div>
				</div>
				<div className={classes.this_month}>
					<img src={logos.rectGreen} alt='ovalGreen' />
					<div className='h-5 '>
						<span>Services </span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default VolumeService;
