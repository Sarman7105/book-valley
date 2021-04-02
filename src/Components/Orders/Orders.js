import React, { useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [user, setUser] = useContext(UserContext);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://banana-crisp-72370.herokuapp.com/orders?email="+user.email)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    },[user.email])
    return (
        <div className="container">
            <h3>this is order component</h3>
            <h3>Hello {user.email}</h3>
            <h3>you have ordered {items?.length || 0} items</h3>
            {
                items &&
                <table className="table table-success table-striped">
				<thead>
					<tr>
						<th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Time</th>
					</tr>
				</thead>

				<tbody>
					{items.map((item) => (
						<tr key={item._id}>
                            <td>{ item.products[0].name}</td>
                            <td>{item.products[0].value}</td>
                            <td>{ item.orderTime}</td>
						</tr>
					))}
				</tbody>
			</table>
            }
            
        </div>
    );
};

export default Orders;