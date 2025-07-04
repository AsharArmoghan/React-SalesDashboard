import React from 'react';
import classes from './TopBar.module.css';
import logo from '../../Asset/logo';

const TopBar: React.FC = () => {
	return (
		<div className={classes.main_container}>
			<h1 className={classes.h1}>Dashboard</h1>

			<div className={classes.search}>
				<img
					src={logo.searchIcon}
					alt='search'
				/>
				<input
					type='text'
					id={classes.search_input}
				/>
			</div>

			<div className={classes.langIcon}>
				<img
					src={logo.langIcon}
					alt='english'
				/>
				<span>Eng(US)</span>
				<img
					src={logo.dropdownIcon}
					alt='dropdown'
				/>
			</div>
			<div className={classes.profile}>
				<img
					id={classes.profile_bellicon}
					src={logo.bellIcon}
					alt='bellIcon'
				/>
				<div className={classes.user}>
					<img
						id={classes.user_image}
						src={logo.profilePic}
						alt='profilePic'
					/>
					<div
						className={
							classes.user_details
						}>
						<p>TextBold</p>
						<p>textlight</p>
					</div>

					<img
						src={logo.dropdownIcon}
						alt='dropdown'
					/>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
