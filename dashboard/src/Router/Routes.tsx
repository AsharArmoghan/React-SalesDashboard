import React, { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router";
import { LoadingComponent } from "../components/Loading/loadingScreen";
// import { elements } from "chart.js";
import PrivateRoute from "./privateRoute";
import Layout from "@/components/Layout/layout";

const loadable = (Component: any) => (props: any) =>
	(
		<Suspense fallback={<LoadingComponent />}>
			<Component {...props} />
		</Suspense>
	);
const Home = loadable(
	React.lazy(async () => {
		await new Promise(resolve => setTimeout(resolve, 1.5 * 1000));
		return import("../Pages/Home/homepage");
	})
);
const Login = loadable(
	lazy(async () => {
		return await new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/LogIn/logInComponent"));
	})
);
const Signup = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/Signup/signup"));
	})
);
const Orders = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/Orders/OrderList"));
	})
);
const Products = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/Product/ProductList/ProductList"));
	})
);
const AddProducts = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/Product/AddProducts/AddProducts"));
	})
);
const Error = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/404/Error"));
	})
);

const Sales = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/Sales/Sales"));
	})
);
const LeaderBoard = loadable(
	lazy(async () => {
		return new Promise(resolve => setTimeout(resolve, 1.5 * 1000)).then(() => import("../Pages/LeaderBoard/LeaderBoard"));
	})
);

export default function AppRoutes() {
	return useRoutes([
		{
			path: "/",
			element: (
				<PrivateRoute>
					<Layout />
				</PrivateRoute>
			),
			children: [
				{ index: true, element: <Navigate to='home' /> },
				{ path: "home", element: <Home /> },
				{ path: "products", element: <Products /> },
				{ path: "orders", element: <Orders /> },
				{ path: "add-products", element: <AddProducts /> },
				{ path: "sales", element: <Sales /> },
				{ path: "board", element: <LeaderBoard /> },
				// { path: "charts", element: <Charts /> },
				// { path: "settings", element: <Settings /> },
				// { path: "notifications", element: <Notifications /> },
			],
		},
		{
			path: "login",
			element: <Login />,
		},
		{
			path: "signup",
			element: <Signup />,
		},
		{
			path: "404",
			element: <Error />,
		},
	]);
}
