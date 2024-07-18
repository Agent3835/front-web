import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AdminDashboard from '../pages/AdminDashboard';
import UserManagement from '../pages/UserManagement';
import ProductManagement from '../pages/ProductManagement';
import PromotionManagement from '../pages/PromotionManagement';

function AdminMenu() {
    return(
        <>
            <Sidebar/>
            <div className='content-with-sidebar'>
                <Routes>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/users" element={<UserManagement />} />
                    <Route path="/admin/products" element={<ProductManagement />} />
                    <Route path="/admin/promotions" element={<PromotionManagement />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    );
}

export default AdminMenu;