import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import CreateUser from '../CreateUser/CreateUser';
import SignInUser from '../SignInUser/SignInUser';
import { UserContext } from '../../App';

const Login = () => {
	const [isNewUser, setIsNewUser] = useState(true);
	const [user, setUser] = useContext(UserContext);
	const [ userInfo, setUserInfo ] = useState({ email: '', password: '', name: '' });
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
		firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			updateUser(userInfo.name);
			console.log(user.email);
			setInfo(user);
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
		<div className="container">
			<h3>{user.email}</h3>
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
		</div>
	);
};

export default Login;
