import React, { useState } from 'react';
import './SignInUser.css';

const SignInUser = (props) => {
    
    const handleLogIn = props.handleLogIn;
	const setIsNewUser = props.setIsNewUser;
	const setLogInInfo = props.setLogInInfo;
	const logInInfo = props.logInInfo;
    const handleOnBlur = (event) => {
		const newLogInInfo = {...logInInfo};
		console.log(event.target.name,event.target.value)
		newLogInInfo[event.target.name] = event.target.value;
        setLogInInfo(newLogInInfo);
    }
    return (
        <div className="signup-container">
			<h3 className="text-center">Login</h3>
            <form onSubmit={handleLogIn}>
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
					<input type="submit" className="form-control" value="submit" />
				</div>
            </form>
            <div className="mb-3">
				<p className="text-center">
					Don't have an account?
					<span className="text-info link" onClick={function () { setIsNewUser(true) }}>
					create an account</span>
				</p>
			</div>
        </div>
    );
};

export default SignInUser;