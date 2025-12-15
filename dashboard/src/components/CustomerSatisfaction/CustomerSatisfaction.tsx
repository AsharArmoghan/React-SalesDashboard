import classes from "./customerSatisfaction.module.css";
import { Line } from "react-chartjs-2";
import logos from "../../Asset/logo";
import { useProductContext } from "@/Hooks/useProducts";

import { useTheme } from "@/Context/ThemeContext";

const CostomerSatisfaction: React.FC = () => {
	const { dashboard } = useProductContext();
	const { theme } = useTheme();

	if (!dashboard) return null;
	const now = new Date();
	const thisMonth = now.getMonth();
	const lastMonth = (thisMonth - 1 + 12) % 12;

	const weeks = ["week1", "week2", "week3", "week4", "week5"];
	const thisMonthMap = { week1: 0, week2: 0, week3: 0, week4: 0, week5: 0 };
	const thisMonthCount = { ...thisMonthMap };
	const lastMonthMap = { ...thisMonthMap };
	const lastMonthCount = { ...thisMonthMap };

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
				borderColor: "oklch(69.6% 0.17 162.48)",
				tension: 0.4,
				backgroundColor: "oklch(0.696 0.17 162.48 / 30.76%)",
			},
			{
				label: "This Month",
				data: thisMonthData,
				fill: true,
				borderColor: "oklch(50% 0.134 242.749)",
				tension: 0.4,
				backgroundColor: "oklch(50% 0.134 242.749 / 30.76%)",
			},
		],
	};

	const legendColor = theme === "dark" ? "#e5e7eb" : "#000";

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
					color: legendColor,
					boxWidth: 20,
					padding: 10,
					font: {
						family: "Poppins",
					},
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
		<div className={`${classes.main_chart} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<h2 className='text-2xl pt-2 pl-4 font-semibold text-text-main-light dark:text-text-main-dark font-poppins'>Customer Satisfaction</h2>
			<Line
				className={`${classes.Line} font-semibold text-text-main-light dark:text-text-main-dark font-poppins`}
				data={chartData}
				options={options}
			/>
			<div
				className={`${classes.legend} text-gray-400 dark:text-gray-500 pt-4 font-poppins border-t-4 border-gray-200 dark:border-gray-700`}
			>
				<div className={`${classes.last_month} border-r-4 pr-16 border-gray-200 dark:border-gray-700`}>
					<img src={logos.ovalblue} alt='ovalBlue' />
					<div className={`${classes.text} font-medium tracking-wider text-text-main-light dark:text-text-main-dark font-poppins`}>
						Last Month
					</div>
				</div>
				<div className={`${classes.this_month}`}>
					<img src={logos.ovalgreen} alt='ovalGreen' />
					<div className={`${classes.text} font-medium tracking-wider text-text-main-light dark:text-text-main-dark font-poppins`}>
						This Month
					</div>
				</div>
			</div>
		</div>
	);
};

export default CostomerSatisfaction;
