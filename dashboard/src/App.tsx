import "./App.css";
import { FC } from "react";
import AppRoutes from "./Router/Routes";

const App: FC = () => {
	return (
		<div className={"app"}>
			<AppRoutes />
		</div>
	);
};

export default App;
