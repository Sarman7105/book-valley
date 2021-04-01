import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { BookContext } from '../../App';

const Books = ({ book }) => {
	const [selectedBook, setSelectedBook] = useContext(BookContext);
	const history = useHistory();

	const handleClick = () => {
		const newBook = [...selectedBook, book];
		setSelectedBook(newBook);
		history.push('/checkout')
	};

	return (
        <div className="col">
            <div className="card h-100">
            <img src={book.url} className="card-img-top" alt=""/>
			<div className="card-body">
				<h5 className="card-title">{book.name}</h5>
				<p>{book.author}</p>
				<h3>${book.value}</h3>
                <button className='btn btn-primary' onClick={handleClick}>Buy Now</button>
			</div>
		</div>
        </div>
	);
};

export default Books;
