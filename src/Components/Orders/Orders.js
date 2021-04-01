import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className="container">
            <h3>this is order component</h3>
            <h3>Hello { user.email}</h3>
        </div>
    );
};

export default Orders;