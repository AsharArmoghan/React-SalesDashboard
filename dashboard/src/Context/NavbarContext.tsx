import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
	isNavbarOpen: boolean;
	setIsNavbarOpen: (open: boolean) => void;
	toggleNavbar: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const toggleNavbar = () => {
		setIsNavbarOpen(prev => !prev);
	};

	return <NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen, toggleNavbar }}>{children}</NavbarContext.Provider>;
};

export const useNavbar = () => {
	const context = useContext(NavbarContext);
	if (!context) {
		throw new Error("useNavbar must be used within NavbarProvider");
	}
	return context;
};
