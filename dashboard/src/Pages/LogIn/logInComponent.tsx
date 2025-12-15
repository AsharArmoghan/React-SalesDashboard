import React, { useEffect, useState } from "react";
import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import { motion } from "framer-motion";
import { useTheme } from "@/Context/ThemeContext";
import { AnimatedButton } from "@/components/AnimatedButton";
import logos from "@/Asset/logo";

const Login: React.FC = () => {
	const { logIn, state } = useAuth();
	// const  login  = useLogIn();
	const navigate = useNavigate();
	const { theme, toggleTheme } = useTheme();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		if (state.isAuthenticated) {
			navigate("/home");
		}
	}, [state.isAuthenticated, navigate]);

	const validateForm = () => {
		let isValid = true;
		const newErrors = { email: "", password: "" };

		// Email validation
		if (!formData.email) {
			newErrors.email = "Email is required";
			isValid = false;
		}
		// else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		// 	newErrors.email = "Email is invalid";
		// 	isValid = false;
		// }

		// Password validation
		if (!formData.password) {
			newErrors.password = "Password is required";
			isValid = false;
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		// Clear error when user types
		if (errors[name as keyof typeof errors]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			await logIn(formData);
		}
	};

	return (
		<>
			<div className={`${classes.container} relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300`}>
				<div className='absolute top-4 right-4 z-50'>
					<AnimatedButton
						onClick={toggleTheme}
						className='rounded-full p-2 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-sm shadow-lg transition-all '
					>
						{theme === "dark" ? (
							<img src={logos.sunIcon} alt='Sun Icon' className='size-7 text-yellow-500' />
						) : (
							<img src={logos.moonIcon} alt='Moon Icon' className='size-7 text-gray-500' />
						)}
					</AnimatedButton>
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className={`${classes.form_container} transition-colors duration-300 `}
				>
					<div className={classes.title}>
						<div className={classes.h1}>
							<h1 className={`${classes.title_h1} text-sky-600 dark:text-sky-800 stroke-sky-500 dark:stroke-sky-600`}>
								DashBoard
							</h1>
							<h1
								className={`${classes.title_h1} text-sky-600 dark:text-sky-800`}
								style={{
									clipPath: "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
								}}
							>
								DashBoard
							</h1>
						</div>
						<div className={classes.title_span}>
							<span className='text-sky-500 dark:text-sky-700'> Welcome to DashBoard </span>
							<br />
							<span className='text-sky-500 dark:text-sky-700'>Please Use your Employee Email Id</span>
						</div>
					</div>
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className={`${classes.main_form} pl-8 pr-8 lg:mr-24 sm:pl-2 sm:pr-2  bg-slate-200 dark:bg-slate-800 transition-colors duration-300`}
					>
						<div className={`${classes.form_label} text-2xl text-sky-500 dark:text-sky-300`}>Log In</div>
						<form className={classes.form} onSubmit={handleSubmit}>
							<div className='flex flex-col align-center'>
								<input
									type='email'
									name='email'
									// pattern=".+@example\.com"
									className={`${classes.form_input} bg-gray-50/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600`}
									value={formData.email}
									onChange={handleChange}
									placeholder='Email'
								/>
								{errors.email && <span className='text-red-500  text-xs self-start ml-2'>{errors.email}</span>}
							</div>

							<div className='flex flex-col align-center relative'>
								<div className='relative w-full'>
									<input
										type={showPassword ? "text" : "password"}
										name='password'
										className={`${classes.form_input} bg-gray-50/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 pr-10`}
										value={formData.password}
										onChange={handleChange}
										disabled={state.isLoading}
										placeholder='Password'
									/>
									<button
										type='button'
										onClick={togglePasswordVisibility}
										className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 focus:outline-none'
									>
										{showPassword ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
												/>
											</svg>
										) : (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
												/>
												<path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
											</svg>
										)}
									</button>
								</div>
								{errors.password && <span className='text-red-500  text-xs self-start ml-2'>{errors.password}</span>}
							</div>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								disabled={state.isLoading}
								className={`${classes.btn}
								bg-sky-600 w-52 h-12 rounded-full  dark:bg-sky-800 hover:bg-sky-800dark:hover:bg-sky-600 border-sky-600 dark:border-sky-600`}
								type='submit'
							>
								<div className='text-center text-slate-50 hover:text-black'>Log in</div>
							</motion.button>
						</form>
						{state.error && <p className={`${classes.error} text-red-500  bg-transparent`}>{state.error}</p>}
						<div className={`${classes.line} border-b-2 border-sky-800 dark:border-sky-800`}></div>
						<Link to={"/signup"}>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`${classes.btn}
								bg-sky-600   w-48 h-11 rounded-full dark:bg-sky-800 hover:bg-sky-800dark:hover:bg-sky-600 border-sky-600 dark:border-sky-600`}
							>
								<div className='text-center text-slate-50 hover:text-black'>Sign up</div>
							</motion.button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};
export default Login;
