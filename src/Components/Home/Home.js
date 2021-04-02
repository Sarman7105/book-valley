import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import LoadingPage from '../LoadingPage/LoadingPage';

const Home = () => {
	const [ books, setBooks ] = useState([]);
	useEffect(() => {
		fetch('https://banana-crisp-72370.herokuapp.com/books').then((res) => res.json()).then((data) => setBooks(data));
	}, []);
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{
					(books.length===0)?<LoadingPage></LoadingPage>:
                	books.map((book) => <Books key={book._id} book={book} />)
				}
            </div>
		</div>
	);
};

export default Home;
