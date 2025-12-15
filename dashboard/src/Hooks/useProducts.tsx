import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";
import { ProductContextType } from "../Types/Dashboard";

export const useProductContext = (): ProductContextType => {
	const context = useContext(ProductContext);

	if (!context) {
		throw Error("useProductContext must be used inside an ProductContextProvider");
	}

	return context;
};
