import { createContext, useEffect, useState } from "react";

// export const productReducer = (state, action) => {
// 	switch (action.type) {
// 		case "SET_PRODUCT":
// 			return {
// 				product: action.payload,
// 			};
// 		case "CREATE_PRODUCT":
// 			return {
// 				product: [action.payload, ...state.product],
// 			};
// 		case "DELETE_PRODUCT":
// 			return {
// 				product: state.product.filter(w => w._id !== action.payload._id),
// 			};
// 		default:
// 			return state;
// 	}
// };
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState(null);
	const [orders, setOrders] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchProducts();
		fetchOrders();
	}, []);

	const fetchProducts = async () => {
		try {
			const response = await fetch("https://dummyjson.com/products?limit=20");
			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}
			const data = await response.json();
			setProducts(data.products);
			// console.log("Products fetched successfully:", data.products);
		} catch (err) {
			console.error("Error fetching products:", err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};
	const fetchOrders = async () => {
		try {
			const response = await fetch("https://dummyjson.com/carts?limit=20");
			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}
			const data = await response.json();
			setOrders(data.carts);
			console.log("Products fetched successfully:", data.carts);
		} catch (err) {
			console.error("Error fetching products:", err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return <ProductContext.Provider value={{ products, orders, loading, error }}>{children}</ProductContext.Provider>;
};
