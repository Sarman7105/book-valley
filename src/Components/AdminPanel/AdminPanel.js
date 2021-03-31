import React from 'react';
import AddBook from '../AddBook/AddBook';
import AdminMenu from '../AdminMenu/AdminMenu';
import './AdminPanel.css'

const AdminPanel = () => {
    return (
        <div className="row panel-container">
            <div className="col-md-2 admin-menu">
                <div >
                    <AdminMenu/>
                </div>
            </div>
            <div className="col-md-10 admin-data">
                <div>
                    <AddBook></AddBook>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;