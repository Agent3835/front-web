import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AdminMenu from './admin/components/AdminMenu';
import VanillaMenu from './components/VanillaMenu';
import authService from './services/authService';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const currentUser = authService.getCurrentUser();

    return (
        <Router>
            <div className="App">
            {(currentUser === null || currentUser.role !== 'admin') && <Header />}
                <div className="main-content">
                    {(currentUser === null || currentUser.role !== 'admin') ? <VanillaMenu /> : <AdminMenu />}
                    
                </div>
                {(currentUser === null || currentUser.role !== 'admin') && <Footer />}
            </div>
        </Router>
    );
}

export default App;
