import { FC } from "react";
import AppRoutes from "./Router/Routes";
import app from "./App.module.css";

const App: FC = () => {
	return (
		<div className={`${app}`}>
			<AppRoutes />
		</div>
	);
};

export default App;
