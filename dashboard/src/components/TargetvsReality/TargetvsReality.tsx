import React, { useMemo } from "react";
import classes from "./targetvsReality.module.css";
import logos from "../../Asset/logo";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useProductContext } from "@/Hooks/useProducts";
import { useTheme } from "@/Context/ThemeContext";

Chart.register(...registerables);

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const TargetvsReality: React.FC = () => {
	const { dashboard } = useProductContext();
	const { theme } = useTheme();

	const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
	const textColor = theme === "dark" ? "#9ca3af" : "#96a5b8";

	const option = useMemo(
		() => ({
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: { display: true, labels: { color: textColor } },
			},
			scales: {
				x: {
					scaleLabel: {
						display: true,
					},
					ticks: { maxTicksLimit: 5, color: textColor },
					grid: {
						display: false,
						color: gridColor,
					},
				},
				y: {
					display: false,
					grid: {
						color: gridColor,
					},
				},
			} as any,
		}),
		[textColor, gridColor]
	);

	const { chartData, targetSales, realitySales } = useMemo(() => {
		if (!dashboard) {
			return {
				chartData: {
					labels: monthNames,
					datasets: [],
				},
				targetSales: 0,
				realitySales: 0,
			};
		}

		const tMap = Array(12).fill(0);
		const rMap = Array(12).fill(0);
		let tSales = 0;
		let rSales = 0;

		dashboard.forEach(entry => {
			if (!entry.createdAt) return;
			const date = new Date(entry.createdAt);
			const monthIndex = date.getMonth();
			if (isNaN(monthIndex)) return; // Safety check

			const value = entry.amount_spent || 0;
			const type = entry.service_type;

			if (type === "Target Sales") {
				tMap[monthIndex] += value;
				tSales += value;
			} else if (type === "Reality Sales") {
				rMap[monthIndex] += value;
				rSales += value;
			}
		});

		const data = {
			labels: monthNames,
			datasets: [
				{
					label: "Reality Sales",
					data: rMap,
					backgroundColor: "#4AB58E",
				},
				{
					label: "Target Sales",
					data: tMap,
					backgroundColor: "#FFCF00",
				},
			],
		};

		return { chartData: data, targetSales: tSales, realitySales: rSales };
	}, [dashboard]);

	if (!dashboard) return null;
	return (
		<div className={`${classes.main_container} bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300`}>
			<span className={`${classes.title} text-2xl pt-2 pl-4 font-semibold text-text-main-light dark:text-text-main-dark font-poppins`}>
				Target vs Reality
			</span>
			<Bar
				className={`${classes.barChart} text-sm  font-poppins text-text-main-light dark:text-text-main-dark`}
				data={chartData}
				options={option}
			/>

			<div className={`${classes.target_legends} pb-2`}>
				<div className={classes.legends}>
					<div className={`${classes.sales_container} pl-8`}>
						<img src={logos.realSales} alt='realSales' />
						<div className={`${classes.legend_title} pl-4 pr-2`}>
							<div className='text-sm text-text-main-light dark:text-text-main-dark font-semibold tracking-wider antialiased  font-poppins '>
								Real Sales
							</div>
							<div className={`${classes.low_text} text-sm text-text-muted-light dark:text-text-muted-dark`}>Global</div>
						</div>
					</div>
					<div className='pl-4 pr-2 text-green-500 dark:text-green-800 font-semibold tracking-wider antialiased font-poppins text-md'>
						{realitySales}
					</div>
				</div>
				<div className={classes.legends}>
					<div className={classes.sales_container}>
						<img src={logos.targetSales} alt='' />
						<div className={`${classes.legend_title} pl-4 pr-2`}>
							<div className=' text-text-main-light dark:text-text-main-dark font-semibold tracking-wider antialiased font-poppins text-xs'>
								Target Sales
							</div>
							<div className={`${classes.low_text} text-sm text-text-muted-light dark:text-text-muted-dark`}>Commercial</div>
						</div>
					</div>
					<div className='pl-4 pr-2 text-yellow-500 dark:text-yellow-800 font-semibold tracking-wider antialiased font-poppins text-md'>
						{targetSales}
					</div>
				</div>
			</div>
		</div>
	);
};
export default TargetvsReality;
