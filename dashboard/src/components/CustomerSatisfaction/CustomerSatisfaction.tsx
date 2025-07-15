import classes from "./customerSatisfaction.module.css";
import { Line } from "react-chartjs-2";
import logos from "../../Asset/logo";
import { useProductContext } from "@/Hooks/useProducts";

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

const CostomerSatisfaction: React.FC = () => {
	const { dashboard } = useProductContext();
	const now = new Date();
	const thisMonth = now.getMonth();
	const lastMonth = (thisMonth - 1 + 12) % 12;

	// Initialize buckets
	const weeks = ["week1", "week2", "week3", "week4", "week5"];
	const thisMonthMap = { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 };
	const thisMonthCount = { ...thisMonthMap };
	const lastMonthMap = { ...thisMonthMap };
	const lastMonthCount = { ...thisMonthMap };

	// Helper to get week of month
	function getWeekOfMonth(date) {
		const day = date.getDate();
		return `week${Math.min(Math.ceil(day / 7), 5)}`;
	}
	dashboard.forEach(entry => {
		const createdAt = new Date(entry.createdAt);
		const month = createdAt.getMonth();
		const week = getWeekOfMonth(createdAt);
		const score = entry.satisfaction_score || 0;

		if (month === thisMonth) {
			thisMonthMap[week] += score;
			thisMonthCount[week]++;
		} else if (month === lastMonth) {
			lastMonthMap[week] += score;
			lastMonthCount[week]++;
		}
	});
	const getAverage = (map, countMap) => weeks.map(week => (countMap[week] ? map[week] / countMap[week] : 0));
	const labels = weeks;
	const thisMonthData = getAverage(thisMonthMap, thisMonthCount);
	const lastMonthData = getAverage(lastMonthMap, lastMonthCount);
	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Last Month",
				data: lastMonthData,
				fill: true,
				borderColor: "#05C283",
				tension: 0.4,
				backgroundColor: "rgba(5,194,131, 0.2)",
			},
			{
				label: "This Month",
				data: thisMonthData,
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
				display: true,
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
	return (
		<div className={classes.main_chart}>
			<h5>Customer Satisfaction</h5>
			<Line className={classes.Line} data={chartData} options={options} />
			<div className={classes.legend}>
				<div className={classes.last_month}>
					<img src={logos.ovalblue} alt='ovalBlue' />
					<div className={classes.text}>Last Month</div>
				</div>
				<div className={classes.this_month}>
					<img src={logos.ovalgreen} alt='ovalGreen' />
					<div className={classes.text}>This Month</div>
				</div>
			</div>
		</div>
	);
};

export default CostomerSatisfaction;
