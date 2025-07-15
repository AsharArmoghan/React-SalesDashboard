import React, { useEffect, useState } from "react";
import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";

const Login: React.FC = () => {
	const { logIn, state } = useAuth();
	// const  login  = useLogIn();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	useEffect(() => {
		if (state.isAuthenticated === true) {
			navigate("/home");
		}
		console.log("state.isAuthenticated: ", state.isAuthenticated);
	}, [state.isAuthenticated, navigate]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.email || !formData.password) {
			alert("Please fill all the fields");
			return;
		}
		await logIn(formData);
		navigate("/home");
	};

	return (
		<>
			<div className={classes.container}>
				<div className={classes.form_container}>
					<div className={classes.title}>
						<div className={classes.h1}>
							<h1 className={classes.title_h1}>DashBoard</h1>
							<h1 className={classes.title_h1}>DashBoard</h1>
						</div>
						<div className={classes.title_span}>
							<span> Welcome to DashBoard </span>
							<br />
							<span>Please Use your Employee Email Id</span>
						</div>
					</div>
					<div className={classes.main_form}>
						<span className={classes.form_label}>Log In</span>
						<form className={classes.form} onSubmit={handleSubmit}>
							<input
								type='email'
								name='email'
								// pattern=".+@example\.com"
								className={classes.form_input}
								value={formData.email}
								onChange={handleChange}
								placeholder='Email'
							/>

							<input
								type='password'
								name='password'
								className={classes.form_input}
								value={formData.password}
								onChange={handleChange}
								disabled={state.isLoading}
								placeholder='Password'
							/>
							<button className={classes.btn} type='submit'>
								<span>Log in</span>
							</button>
						</form>
						{state.error && <p className={classes.error}>{state.error}</p>}
						<div className={classes.line}></div>
						<Link to={"/signup"}>
							<button className={classes.btn}>
								<span>Sign up</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
