import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminPanel from './Components/AdminPanel/AdminPanel';
const userInfo = {
	name: '',
	email: '',
	password: '',
	isValidUser: false
};
export const UserContext = createContext();

function App() {
	const [user, setUser] = useState(userInfo);

        // const fakeData = { price: 21 };
        // console.log(fakeData);
        // const url = 'http://localhost:5000/add';
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'contentType': 'application/json'
        //     },
        //     body: JSON.stringify(fakeData)
        // })
        //     .then(res => console.log('server side response', res));
    
	return (
		<UserContext.Provider value={[user, setUser]}>
			<Router>
				<Header/>
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					{/* <PrivateRoute path="/destination">
						<Destination></Destination>
					</PrivateRoute> */}
					<Route path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/admin">
						<AdminPanel></AdminPanel>
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
