import React, { createContext, useReducer, useContext, ReactNode, Dispatch, useEffect } from "react";
import { AuthState, AuthAction } from "../Types/User";

const initialState: AuthState = {
	isAuthenticated: false,
	userId: null,
	token: null,
	isLoading: false,
	error: null,
};
export interface AuthContextType {
	state: AuthState;
	dispatch: Dispatch<AuthAction>;
	logIn: (credentials: any) => Promise<void>;
	logOut: () => void;
	signUp: (credentials: any) => Promise<void>;
}

// Reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case "LOGIN":
			localStorage.setItem("userId", JSON.stringify(action.payload.userId));
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			localStorage.setItem("isAuthenticated", JSON.stringify(true));
			return {
				...state,
				isAuthenticated: true,
				userId: action.payload.userId,
				token: action.payload.token,
				isLoading: false,
				error: null,
			};
		case "LOGOUT":
			localStorage.clear();
			return {
				...initialState,
				isAuthenticated: false,
			};
		case "SIGNUP":
			localStorage.setItem("userId", JSON.stringify(action.payload.userId));
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			return {
				...state,
				isAuthenticated: true,
				userId: action.payload.userId,
				token: action.payload.token,
				isLoading: false,
			};
		case "ERROR":
			localStorage.clear();
			return {
				...initialState,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);
	useEffect(() => {
		try {
			const token = localStorage.getItem("token");
			const userId = localStorage.getItem("userId");
			if (token) {
				dispatch({
					type: "LOGIN",
					payload: { userId: JSON.parse(userId), token: JSON.parse(token) },
				});
			} else {
				dispatch({ type: "LOGOUT" });
			}
		} catch (error) {
			console.error("Failed to load userId from local storage", error);
		}
	}, []);
	const logIn = async (credentials: any) => {
		const { email, password } = credentials;
		try {
			const response = await fetch("http://localhost:8080/api/users/login", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
			if (!response.ok) {
				dispatch({ type: "ERROR", payload: "Invalid credentials" });
				return null;
			}
			const data = await response.json();
			const { userId, token } = data;
			console.log("Logged in successfully", data);
			dispatch({
				type: "LOGIN",
				payload: { userId: userId, token: token },
			});
		} catch (error) {
			dispatch({ type: "ERROR", payload: "Invalid credentials" });
			throw error;
		}
	};

	const logOut = () => {
		dispatch({ type: "LOGOUT" });
	};

	const signUp = async (credentials: any) => {
		const { username, email, password } = credentials;
		try {
			const response = await fetch("http://localhost:8080/api/users/signup", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ username, email, password }),
			});
			if (!response.ok) {
				dispatch({ type: "ERROR", payload: "User already register" });
				return null;
			}
			const data = await response.json();
			const { userId, token } = data;
			console.log("Signup in successfully", data);
			dispatch({
				type: "SIGNUP",
				payload: { userId: userId, token: token },
			});
		} catch (error) {
			dispatch({ type: "ERROR", payload: "Failed to Sign up" });
			throw error;
		}
	};

	return <AuthContext.Provider value={{ state, dispatch, logIn, logOut, signUp }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export { AuthContextProvider };
