import React from 'react';
import { BrowserRouter as Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Installations from '../pages/Installations';
import Products from '../pages/Products';
import FormLogin from '../pages/FormLogin';

function VanillaMenu() {
    return(
        <div className='content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<FormLogin />} />
                <Route path="/installations" element={<Installations />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default VanillaMenu;