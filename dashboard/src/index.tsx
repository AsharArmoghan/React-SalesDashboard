import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthContextProvider } from "./Context/AuthContext";
import { ProductContextProvider } from "./Context/ProductContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ProductContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ProductContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();
