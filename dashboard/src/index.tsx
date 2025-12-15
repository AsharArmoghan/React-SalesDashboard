import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthContextProvider } from "./Context/AuthContext";
import { ProductContextProvider } from "./Context/ProductContext";
import { AnimationProvider } from "./components/AnimationProvider";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./Context/ThemeContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<AuthContextProvider>
				<ProductContextProvider>
					<BrowserRouter>
						<AnimationProvider>
							<App />
						</AnimationProvider>
					</BrowserRouter>
				</ProductContextProvider>
			</AuthContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
reportWebVitals();
