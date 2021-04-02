import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import CreateUser from '../CreateUser/CreateUser';
import SignInUser from '../SignInUser/SignInUser';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
	const [isNewUser, setIsNewUser] = useState(true);
	const [user, setUser] = useContext(UserContext);
	const [userInfo, setUserInfo] = useState({ email: '', password: '', name: '' });
	let history = useHistory();
	let location = useLocation();
	const provider = new firebase.auth.GoogleAuthProvider();

	let { from } = location.state || { from: { pathname: "/" } };
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}

	const setInfo = (data) => {
		const newUser = { ...user };
		newUser.name = data.displayName;
		newUser.email = data.email;
		newUser.isValidUser = true;
		setUser(newUser);
	}


	//google login
	const handleGoogleLogin = (event) => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;
				var token = credential.accessToken;
				
				const userInfo = result.user;
				console.log('success');
				setInfo(userInfo);
				// const newUser = { ...user };
				// console.log('successful', userInfo);
				// newUser.name = userInfo.displayName;
				// newUser.email = userInfo.email;
				// newUser.isValidUser = true;
				// setUser(newUser);
				// setSuccess('You are Successfully LoggedIn');
				// setError('');
				history.replace(from);
			})
		.catch((error) => {
				var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
				
				// var email = error.email;
				
				// var credential = error.credential;
				// setSuccess('');
				// setError(errorMessage);
			});
		// event.preventDefault();
	};

	const updateUser = (name) => {
		const user = firebase.auth().currentUser;

		user
			.updateProfile({
				displayName: name
			})
			.then(function() {
				console.log('user name updated successfully');
			})
			.catch(function(error) {
				console.log(error);
			});
		};
		

	const handleSubmit = (event) => {
		console.log(userInfo.email, userInfo.password);
		debugger;
		firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
			.then((userCredential) => {
			// Signed in
				var user = userCredential.user;
				updateUser(userInfo.name);
				console.log(user.email);
				setInfo(user);
				history.replace(from);
			// ...
		});

		// .catch((error) => {
		//     debugger
		// 	var errorCode = error.code;
		//     var errorMessage = error.message;
		//     console.log(errorCode, errorMessage);
		// 	// ..
		// });
		event.preventDefault();
	};

	const handleLogIn = (event) => {
		console.log("signing in ", userInfo.email, userInfo.password);
		firebase
			.auth()
			.signInWithEmailAndPassword(userInfo.email, userInfo.password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log('signed in successfully', user);
				setInfo(user);
				history.replace(from);
				console.log(user.email);
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("errormessage",errorCode, errorMessage);
			});
		event.preventDefault();
	};

	return (
		// <div className="container">
		// 	<h3>{user.email}</h3>
		// 	{isNewUser ? (
		// 		<CreateUser
		// 			handleSubmit={handleSubmit}
		// 			setIsNewUser={setIsNewUser}
		// 			setUserInfo={setUserInfo}
		// 			userInfo={userInfo}
		// 		/>
		// 	) : (
		// 		<SignInUser
		// 			handleLogIn={handleLogIn}
		// 			setIsNewUser={setIsNewUser}
		// 			setUserInfo={setUserInfo}
		// 			userInfo={userInfo}
		// 		/>
		// 	)}
		// 	<p className="text-center">or</p>
		// 		<div className="mt-1 button-container">
		// 			<button onClick={handleGoogleLogin} className="login-button">
		// 				<span>
		// 					<img
		// 						className="text-left"
		// 						src="https://i.ibb.co/TgdQSf5/Group-573.png"
		// 						alt="Group-573"
		// 						border="0"
		// 					/>
		// 				</span>
		// 				continue with google
		// 			</button>
		// 		</div>
		// </div>

		<div className="d-flex container custom-container justify-content-center align-items-center">
			
			<div className="inner-container">
				{/* <h3 className="text-danger">{ error}</h3>
				<h3 className="text-success">{ success}</h3> */}
				{isNewUser ? (
				<CreateUser
					handleSubmit={handleSubmit}
					setIsNewUser={setIsNewUser}
					setUserInfo={setUserInfo}
					userInfo={userInfo}
				/>
			) : (
				<SignInUser
					handleLogIn={handleLogIn}
					setIsNewUser={setIsNewUser}
					setUserInfo={setUserInfo}
					userInfo={userInfo}
				/>
			)}
				<p className="text-center">or</p>
				<div className="mt-1 button-container">
					<button onClick={handleGoogleLogin} className="login-button">
						<span>
							<img
								className="text-left"
								src="https://i.ibb.co/TgdQSf5/Group-573.png"
								alt="Group-573"
								border="0"
							/>
						</span>
						continue with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
