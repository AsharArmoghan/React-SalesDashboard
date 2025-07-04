import React from "react";
import classes from "./volumeService.module.css";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import logos from "../../Asset/logo";

const VolumeService: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "First Volume",
        barPercentage: 0.5,
        data: [12, 19, 3, 5, 2, 3, 7, 8, 9, 10, 11, 12],
        backgroundColor: "rgba(0, 224, 150, 1)",

        stack: "Stack 0",
      },
      {
        label: "Second Services",
        barPercentage: 0.5,
        data: [2, 3, 20, 5, 10, 15, 10, 5, 15, 20, 5, 10],
        backgroundColor: "rgba(0,149,255,1",

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
        display: false,
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
  return (
    <div className={classes.main_container}>
      <span>Volume Vs Service Level</span>
      <Bar className={classes.bar} data={data} options={options} />
      <div className={classes.legend}>
        <div className={classes.last_month}>
          <span>
            <img src={logos.rectBlue} alt="ovalBlue" />
            Vloume
          </span>
          <span>1240</span>
        </div>

        <div className={classes.this_month}>
          <span>
            <img src={logos.rectGreen} alt="ovalGreen" />
            Services
          </span>
          <span>350</span>
        </div>
      </div>
    </div>
  );
};
export default VolumeService;
