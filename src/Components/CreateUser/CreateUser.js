import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './CreateUser.css';

const CreateUser = ({ handleSubmit, setIsNewUser, setUserInfo, userInfo }) => {
	const [ user, setUser ] = useContext(UserContext);
	const [ password, setPassword ] = useState('');
	// useEffect(() => {
	// 	const fakeUser = { userInfoInfo };
	// 	fakeUser.email = 'sarman@gmail.com';
	// 	setUserInfo(fakeUser);
	// }, []);

	const isValidPassword = (password) => {
		// const regularExpression = /\d/;
		// return regularExpression.test(password) && password.length >= 6;
		return true;
	};
	const isValidEmail = (email) => {
		const regularExpression = /\S+@\S+\.\S+/;
		return regularExpression.test(email);
	};

	const handleOnBlur = (event) => {
		const eventName = event.target.name;
		const eventValue = event.target.value;
		// console.log(eventName, eventValue);
		let isFieldValid = true;

		if (eventName === 'email') {
			isFieldValid = isValidEmail(eventValue);
			if (isFieldValid) {
				const newUser = { userInfo };
				newUser.email = eventValue;
				newUser.isValidUser = true;
				setUserInfo(newUser);
			}
		}

		if (eventName === 'name') {
			const newUser = { ...userInfo };
			newUser.name = eventValue;
			// newUser.isValidUser = true;
			setUserInfo(newUser);
		}

		if (eventName === 'password') {
			isFieldValid = isValidPassword(eventValue);
			if (isFieldValid) {
				setPassword(eventValue);
			}
		}
		if (eventName === 'confirmPassword') {
			if (eventValue === password) {
				const newUser = { ...userInfo };
				newUser.isValidUser = true;
				newUser.password = password;
				setUserInfo(newUser);
			}
		}
	};
	return (
		<div className="signup-container">
			<h3 className="text-center">Create an account</h3>
			<h3>{userInfo.email}</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
						id=""
						placeholder="Enter your name"
						onBlur={handleOnBlur}
						required
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						type="text"
						className="form-control"
						name="email"
						id=""
						placeholder="Enter your email address"
						onBlur={handleOnBlur}
						required
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Password</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id=""
						placeholder="Enter your password"
						onBlur={handleOnBlur}
						required
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Confirm Password</label>
					<input
						type="password"
						className="form-control"
						name="confirmPassword"
						id=""
						placeholder="Retype password"
						onBlur={handleOnBlur}
						required
					/>
				</div>
				<div className="mb-3 custom-button">
					<input type="submit" className="form-control" value="submit" />
				</div>
			</form>
			<div className="mb-3">
				<p className="text-center">
					Already have an Account?
					<span
						className="text-info link"
						onClick={function() {
							setIsNewUser(false);
						}}
					>
						SignIn
					</span>
				</p>
			</div>
		</div>
	);
};

export default CreateUser;
