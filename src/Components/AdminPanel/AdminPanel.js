import React, { useEffect, useState } from 'react';
import AddBook from '../AddBook/AddBook';
import AdminMenu from '../AdminMenu/AdminMenu';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminPanel.css';

const AdminPanel = () => {
	const [ isAddingBook, setIsAddingBook ] = useState(true);
	const [ books, setBooks ] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5055/books').then((res) => res.json()).then((data) => setBooks(data));
	}, []);
	return (
		<div className="row panel-container">
			<div className="col-md-2 admin-menu">
				<div>
					<AdminMenu setIsAddingBook={setIsAddingBook} />
				</div>
			</div>
			<div className="col-md-10 admin-data">
				<div>
					{isAddingBook ? (
						<AddBook />
					) : (
						<table class="table table-borderless">
							<thead>
								<tr>
									<th scope="col">Book Name</th>
									<th scope="col">Author Name</th>
									<th scope="col">Price</th>
									<th scope="col">Action</th>
								</tr>
                            </thead>
                            <tbody>
                                    {
                                        books.map(book=><ManageProduct book={book}></ManageProduct>)
                                    }
                            </tbody>
						</table>
						
					)}
				</div>
			</div>
		</div>
	);
};

export default AdminPanel;
