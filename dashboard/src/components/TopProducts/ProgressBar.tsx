import React, { useEffect, useState } from "react";
import classes from "./top_products.module.css";

interface valueProp {
	value: number;
	color: string;
}
function ProgressBar(props: valueProp) {
	const [percent, setPercent] = useState(props.value);

	useEffect(() => {
		setPercent(Math.min(Math.max(props.value, 0), 100) * 20);
	}, [props.value]);

	// const [value, setValue] = useState(0);

	return (
		<div className={classes.progress}>
			<span
				style={{
					color: percent > 10 ? "white" : "black",
				}}
			>
				{percent.toFixed(0)}%
			</span>
			<div
				className={classes.progressBar}
				style={{
					width: `${percent}%`,
					backgroundColor: props.color,
					borderRadius: "10px",
				}}
			></div>
		</div>
	);
}
export default ProgressBar;
