import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
	const [user, setUser] = useState(userInfo);
	const [selectedBook, setSelectedBook] = useState([]);

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
			<BookContext.Provider value={[selectedBook, setSelectedBook]}>

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
					<Route path="/orders">
						<Orders></Orders>
					</Route>
					<Route path="/checkout">
						<CheckOut></CheckOut>
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
