import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };
    return (
        <div className="sidebar">
            <h2>Admin Menu</h2>
            <ul>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/users">Manage Users</Link></li>
                <li><Link to="/admin/products">Manage Products</Link></li>
                <li><Link to="/admin/promotions">Manage Promotions</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    );
};

export default Sidebar;
