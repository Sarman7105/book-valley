import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { BookContext, UserContext } from '../../App';

const CheckOut = () => {
	
	const history = useHistory();
	const [selectedBook, setSelectedBook] = useContext(BookContext);
	const [user, setUser] = useContext(UserContext);
	
	const handleCheckOut = () => {
		const orderDetails = { ...user, products: selectedBook, orderTime: new Date().toDateString() };
		console.log(JSON.stringify(orderDetails));
		const url = 'https://banana-crisp-72370.herokuapp.com/addOrder';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(orderDetails)
		})
			.then(res => res.json())
			.then(data => {
				if (data) {
					alert('your order placed successfully');
					setSelectedBook([]);
			}
		})
		history.push('/orders');
	}

	return (
		<div className="container">
			<h1>this is checkout</h1>
			<h3>Selected Book are {selectedBook.length}</h3>
			<table className="table table-success table-striped">
				<thead>
					<tr>
						<th scope="col">Description</th>
						<th scope="col">Quantity</th>
						<th scope="col">Price</th>
					</tr>
				</thead>

				<tbody>
					{selectedBook.map((book) => (
						<tr>
                            <th scope="row">{ book.name}</th>
							<td>1</td>
                            <td>{ book.value}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button className="btn btn-success text-right" onClick={handleCheckOut}>Check Out</button>
		</div>
	);
};

export default CheckOut;
