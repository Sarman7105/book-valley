import React, { useContext } from 'react';
import { BookContext } from '../../App';

const CheckOut = () => {
	const [ selectedBook, setSelectedBook ] = useContext(BookContext);
	return (
		<div className="container">
			<h1>this is checkout</h1>
			<h3>Selected Book are {selectedBook.length}</h3>
			<table class="table table-success table-striped">
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
		</div>
	);
};

export default CheckOut;
