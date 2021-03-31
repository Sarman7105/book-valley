import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import CreateUser from '../CreateUser/CreateUser';
import SignInUser from '../SignInUser/SignInUser';

const Login = () => {
	const [ isNewUser, setIsNewUser ] = useState(true);
	const [ userInfo, setUserInfo ] = useState({ email: 'sarman7105@gmai.com', password: '', name: '' });
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
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
        debugger
		firebase
			.auth()
			.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
			.then((userCredential) => {
				// Signed in
                var user = userCredential.user;
                updateUser(userInfo.name);
                console.log(user);
				// ...
            })
            
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
		event.preventDefault();
	};

	return (
		<div className="container">
			<h3>{userInfo.email}</h3>
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
