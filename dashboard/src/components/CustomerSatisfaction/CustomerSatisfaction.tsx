import classes from "./customerSatisfaction.module.css";
import { Line } from "react-chartjs-2";
import logos from "../../Asset/logo";
// interface LineChartProps {
// 	data: {
// 		labels: string[];
// 		datasets: [
// 			{
// 				label?: string;
// 				data: number[];
// 				fill?: boolean;
// 				borderColor: string;
// 				tension: number;
// 			}
// 		];
// 	};
// }

const chartData = {
	labels: ["week1", "week2", "week3", "week4", "week5"],
	datasets: [
		{
			label: "Last Month",
			data: [80, 60, 70, 65, 80, 90, 59, 45, 30, 60, 55, 59],
			fill: true,
			borderColor: "#05C283",
			tension: 0.4,
			backgroundColor: "rgba(5,194,131, 0.2)",
		},
		{
			label: "This Month",
			data: [60, 80, 70, 85, 30, 50, 59, 45, 30, 60, 55, 59],
			fill: true,
			borderColor: "#0095FF",
			tension: 0.4,
			backgroundColor: "rgba(0 ,149 , 255, 0.2)",
		},
	],
};
const options = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		filler: {
			propagate: true,
		},
		legend: {
			display: false,
			position: "bottom",
			align: "center",
			labels: {
				usePointStyle: true,
				pointStyle: "dash",
				color: "#000",
				boxWidth: 20,
				padding: 10,
			},
		},
	},
	scales: {
		x: {
			display: false,
			label: false,
		},
		y: {
			display: false,
		},
	},
} as any;
const costomerSatisfaction: React.FC = () => {
	return (
		<div className={classes.main_chart}>
			<h5>Customer Satisfaction</h5>
			<Line className={classes.Line} data={chartData} options={options} />
			<div className={classes.legend}>
				<div className={classes.last_month}>
					<img src={logos.ovalblue} alt='ovalBlue' />
					<div className={classes.text}>Last Month $260</div>
				</div>

				<div className={classes.this_month}>
					<img src={logos.ovalgreen} alt='ovalGreen' />
					<div className={classes.text}>This Month $240</div>
				</div>
			</div>
		</div>
	);
};

export default costomerSatisfaction;
