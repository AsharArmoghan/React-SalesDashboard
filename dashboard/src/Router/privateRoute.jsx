import { Navigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";

const PrivateRoute = ({ children }) => {
	const { state } = useAuth();
	if (state.isAuthenticated === false && state.token === null && state.user === null) {
		console.log("not authenticated");
		return <Navigate to='/login' />;
	} else {
		return children;
	}
};

export default PrivateRoute;
