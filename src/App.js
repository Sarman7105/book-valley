import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
const userInfo = {
	name: '',
	email: '',
	password: '',
	isValidUser: false
};
export const UserContext = createContext();

function App() {
	const [ user, setUser ] = useState(userInfo);
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
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
