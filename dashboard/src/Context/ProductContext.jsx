import { createContext, useReducer } from "react";

export const ProductContext = createContext();

export const productReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCT":
			return {
				product: action.payload,
			};
		case "CREATE_PRODUCT":
			return {
				product: [action.payload, ...state.product],
			};
		case "DELETE_PRODUCT":
			return {
				product: state.product.filter((w) => w._id !== action.payload._id),
			};
		default:
			return state;
	}
};
// export const ProductsProvider = ({ children }) => {
// 	const fetchProducts = async () => {
// 		try {
// 			const response = await fetch("https://fakestoreapi.com/products");
// 			let product = response.data;
// 		} catch (error) {
// 			console.log({ error });
// 		}
// 	};
export const ProductContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, {
		product: null,
	});
	return <ProductContext.Provider value={{ ...state, dispatch }}>{children}</ProductContext.Provider>;
};
