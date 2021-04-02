import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
	const [ books, setBooks ] = useState([]);
	useEffect(() => {
		fetch('https://banana-crisp-72370.herokuapp.com/books').then((res) => res.json()).then((data) => setBooks(data));
	}, []);
	return (
		<div className="container">
			<h1>this is home component</h1>
            <h3>size of book is {books.length}</h3>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {books.map((book) => <Books key={book._id} book={book} />)}
            </div>
		</div>
	);
};

export default Home;
