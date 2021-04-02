import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import CheckOut from './Components/CheckOut/CheckOut';
import Orders from './Components/Orders/Orders';
const userInfo = {
	name: '',
	email: '',
	isValidUser: false
};
export const UserContext = createContext();
export const BookContext = createContext();

function App() {
	const [ user, setUser ] = useState(userInfo);
	const [ selectedBook, setSelectedBook ] = useState([]);

	return (
		<UserContext.Provider value={[ user, setUser ]}>
			<BookContext.Provider value={[ selectedBook, setSelectedBook ]}>
				<Router>
					<Header />
					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>

						<Route exact path="/">
							<Home />
						</Route>

						{/* <PrivateRoute path="/admin">
							<AdminPanel />
						</PrivateRoute>
						<PrivateRoute path="/orders">
							<Orders />
						</PrivateRoute>
						<PrivateRoute path="/checkout">
							<CheckOut />
						</PrivateRoute> */}

						<Route path="/admin">
							<AdminPanel></AdminPanel>
						</Route>
						<Route path="/orders">
							<Orders />
						</Route>
						 <Route path="/checkout">
							<CheckOut />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</BookContext.Provider>
		</UserContext.Provider>
	);
}

export default App;
