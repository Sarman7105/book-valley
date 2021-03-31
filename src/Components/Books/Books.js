import React from 'react';

const Books = ({ book }) => {
	return (
        <div className="col">
            <div className="card h-100">
            <img src={book.url} className="card-img-top" alt=""/>
			<div className="card-body">
				<h5 className="card-title">{book.name}</h5>
				<p>{book.author}</p>
				<h3>${book.value}</h3>
                <button className='btn btn-primary'>Buy Now</button>
			</div>
		</div>
        </div>
	);
};

export default Books;
