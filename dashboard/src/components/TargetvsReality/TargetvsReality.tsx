import React from "react";
import classes from "./targetvsReality.module.css";
import logos from "../../Asset/logo";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

const TargetvsReality: React.FC = () => {
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Reality Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81],
        backgroundColor: "#4AB58E",
      },
      {
        label: "Target Sales",
        data: [30, 50, 60, 55, 59, 45, 30, 59, 80, 81],
        backgroundColor: "#FFCF00",
      },
    ],
  };
  const option = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
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
  return (
    <div className={classes.main_container}>
      <span className={classes.title}>Target vs Reality</span>
      <Bar className={classes.barChart} data={chartData} options={option} />

      <div className={classes.target_legends}>
        <div className={classes.legends}>
          <div className={classes.sales_container}>
            <img src={logos.realSales} alt="realSales" />
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
            }}
          >
            {" "}
            8.823
          </span>
        </div>

        <div className={classes.legends}>
          <div className={classes.sales_container}>
            <img src={logos.targetSales} alt="" />
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
            }}
          >
            12.122
          </span>
        </div>
      </div>
    </div>
  );
};
export default TargetvsReality;
