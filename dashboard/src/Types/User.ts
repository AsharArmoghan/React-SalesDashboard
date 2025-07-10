export interface User {
	username?: string;
	email: string;
	password: string;
}
interface UserId {
	id: string;
}

export interface AuthState {
	isAuthenticated: boolean;
	userId: UserId | null;
	token: string | null;
	isLoading: boolean;
	error: string | null;
}
export type AuthAction =
	| { type: "LOGIN"; payload: { userId: UserId; token: string } }
	| { type: "LOGOUT" }
	| { type: "SIGNUP"; payload: { userId: UserId; token: string } }
	| { type: "ERROR"; payload: string };
