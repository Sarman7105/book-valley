import React from 'react';

const AdminMenu = ({setIsAddingBook}) => {
    const handleAdd = () => {
        setIsAddingBook(true);
    }
    const handleManage = () => {
        setIsAddingBook(false);
    }
    return (
        <div>
            <h2 className="text-center">Book Shop</h2>
            <h5 className="text-center" onClick={handleManage}>Manage Book</h5>
            <h5 className="text-center" onClick={handleAdd}>Add Book</h5>
            
        </div>
    );
};

export default AdminMenu;