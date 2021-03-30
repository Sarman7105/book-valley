import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import CreateUser from '../CreateUser/CreateUser';
import SignInUser from '../SignInUser/SignInUser';

const Login = () => {

    const [isNewUser, setIsNewUser] = useState(false);
    if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
    }
    
    const handleSubmit = (event) => {
       
        event.preventDefault();
    }

    const handleLogIn = (event) => {
       
        event.preventDefault();
    }

    return (
        <div>
            {isNewUser ? (
					<CreateUser
						handleSubmit={handleSubmit}
						setIsNewUser={setIsNewUser}
						
					/>
				) : (
					<SignInUser
						handleLogIn={handleLogIn}
						setIsNewUser={setIsNewUser}
					/>
				)}
        </div>
    );
};

export default Login;