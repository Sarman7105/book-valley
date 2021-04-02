import axios from 'axios';
import React, { useState } from 'react';



const AddBook = () => {
	const [ imageUrl, setImageUrl ] = useState(null);
	const [ bookName, setBookName ] = useState(null);
	const [ authorName, setAuthorName ] = useState(null);
	const [price, setPrice] = useState(null);
	

	const handleOnBlur = (event) => {
	    if (event.target.name === 'book') {
	        setBookName(event.target.value)
	    }
	    if (event.target.name === 'author') {
	        setAuthorName(event.target.value)
	    }
	    if (event.target.name === 'price') {
	        setPrice(event.target.value)
	    }
	}

	const handleSubmit = (event) => {
	    const eventData = {
	        name: bookName,
	        author: authorName,
	        value: price,
	        url: imageUrl
	    };
		
		postData(eventData);
	    event.preventDefault();

	};


	const postData = (eventData) => {
		const url = `https://banana-crisp-72370.herokuapp.com/addBook`;
		console.log(eventData);
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(eventData)
		}).then((res) => console.log('server side response', res));
	}

	

	const handlePhoto = (event) => {
		console.log('file changed');
		console.log(event.target.files[0]);
		const imageData = new FormData();
		imageData.set('key', '717503597ea03f1a0b2ff6dad139c297');
		imageData.append('image', event.target.files[0]);
		// console.log({ imageData });
		axios
			.post('https://api.imgbb.com/1/upload', imageData)
			.then(function(response) {
				console.log(response.data.data.display_url);
				setImageUrl(response.data.data.display_url);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	return (
		<div>
			<h3>Add book</h3>

			<form onSubmit={handleSubmit}>
				<div className="form-group col-md-5">
					<label htmlFor="">Book Name</label>
					<input type="text" name="book" className="form-control" onBlur={handleOnBlur} />
				</div>
				<div className="form-group col-md-5">
					<label htmlFor="">Author Name</label>
					<input type="text" className="form-control" name="author" onBlur={handleOnBlur}/>
				</div>
				<div className="form-group col-md-5">
					<label htmlFor="">Add Price</label>
					<input type="text" className="form-control" name="price" onBlur={handleOnBlur} />
				</div>
				<div className="form-group col-md-5">
					<label htmlFor="">Upload Book Cover Photo</label>
					<input type="file" className="form-control" onChange={handlePhoto} />
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-info"/>
                </div>
			</form>
		</div>
	);
};

export default AddBook;
