import React from 'react';
import './MangeProduct.css';

const ManageProduct = ({book,handleDelete}) => {
    return (
        <tr>
            <td>{ book.name}</td>
            <td>{ book.author}</td>
            <td>${ book.value}</td>
            <td>
                <img src="https://i.ibb.co/ydnRXRm/Group-307.png" alt="Group-307" border="0" className="icon-image"></img>
                <img src="https://i.ibb.co/n0RMTFC/Group-33150.png" alt="Group-33150" border="0" className="icon-image" onClick={()=> handleDelete(book) }/>
            </td>
        </tr>
    );
};

export default ManageProduct;