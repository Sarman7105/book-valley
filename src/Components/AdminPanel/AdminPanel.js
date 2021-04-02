import React, { useEffect, useState } from 'react';
import AddBook from '../AddBook/AddBook';
import AdminMenu from '../AdminMenu/AdminMenu';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminPanel.css';

const AdminPanel = () => {
	const [ isAddingBook, setIsAddingBook ] = useState(true);
	const [ books, setBooks ] = useState([]);
	useEffect(() => {
		fetch('https://banana-crisp-72370.herokuapp.com/books').then((res) => res.json()).then((data) => setBooks(data));
    }, []);
    const handleDelete = (data) => {
        console.log('delete button clicked', data._id);
        const url = `https://banana-crisp-72370.herokuapp.com/deleteProduct/${data._id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('product deleted successfully')
                fetch('https://banana-crisp-72370.herokuapp.com/books')
                    .then((res) => res.json())
                    .then((data) => setBooks(data));
            });
    }
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
                                        books.map(book=><ManageProduct book={book} handleDelete={handleDelete}></ManageProduct>)
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
