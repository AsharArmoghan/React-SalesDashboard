import React, { useEffect, useState } from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
	const navigate = useNavigate();
	const { signUp, state } = useAuth();
	const [formData, setFormData] = useState({
		username: "",
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
		console.log("User Data Submited", formData);
		await signUp(formData);
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
						<form className={classes.form} onSubmit={handleSubmit}>
							<label className={classes.form_label}>Sign Up</label>
							<input
								type='text'
								name='username'
								className={classes.form_input}
								value={formData.username}
								onChange={handleChange}
								placeholder='Name'
							/>
							<input
								type='text'
								name='email'
								// pattern=".+@example.com\"
								className={classes.form_input}
								value={formData.email}
								onChange={handleChange}
								placeholder='Email'
							/>
							{/* <input
								type="date"
								name="dob"
								placeholder="Date of Birth"
								value={dob}
								onChange={handleChange}
							/> */}
							<input
								type='text'
								name='password'
								className={classes.form_input}
								value={formData.password}
								onChange={handleChange}
								disabled={state.isLoading}
								placeholder='Password'
							/>
							<button className={classes.btn} type='submit'>
								<span>Sign up</span>
							</button>
						</form>
						{state.error && <p className={classes.error}>{state.error}</p>}
						<div className={classes.line}></div>
						<Link to={"/login"}>
							<button className={classes.btn}>
								<span>Log in</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default Register;
