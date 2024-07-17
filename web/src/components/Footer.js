import React from 'react';
import '../styles/Footer.css'; // Asegúrate de crear y enlazar tu archivo CSS

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-section">
                    {/* <img src={require('../assets/cfe-logo.png')} alt="CFE Logo" className="footer-logo" /> */}
                    <p>Oficinas Nacionales:</p>
                    <address>
                    Carretera Libre Tijuana-Tecate,<br />
                        Kilometro Numero 10,<br />
                        Fracc. El Refugio, <br/>
                        Quintas Campestre,<br />
                        22253 Redondo, B.C. <br />
                        Contacto: 01 800 123 4567
                    </address>
                </div>
                <div className="footer-section">
                    <h4>LIGAS DE INTERÉS</h4>
                    <ul>
                        <li><a href="#">¿Quiénes somos?</a></li>
                        <li><a href="#">Transparencia y Ética</a></li>
                        <li><a href="#">Protección de Datos Personales</a></li>
                        <li><a href="#">Sistemas de Portales de Obligaciones de Transparencia de Fideicomisos</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>ATENCIÓN AL CLIENTE:</h4>
                    <p> 0322103835@ut-tijuana.edu.mx </p>
                    <h4>EJECUTA LA APP USANDO EXPO</h4>
                    <div className="app-links">
                        <a href="#"><img src={require('../assets/icons/qr.png')} alt="Expo" /></a>
                        {/* <a href="#"><img src={require('../assets/googleplay.png')} alt="Google Play" /></a>
                        <a href="#"><img src={require('../assets/appgallery.png')} alt="AppGallery" /></a>  */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
