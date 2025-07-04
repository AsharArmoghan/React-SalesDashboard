import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

export const useProductContext = () => {
	const context = useContext(ProductContext);

	if (!context) {
		throw Error("useProductContext must be used inside an ProductContextProvider");
	}

	return context;
};
