import React  from 'react';
import PromotionsCarousel from '../components/PromotionsCarousel';
import '../styles/Home.css';
const Home = () => {
    return (
        <div className='main-home'>
            <PromotionsCarousel />
            <div className='home'>
                <div className='sections-container'>
                    <div className='section'>
                        <a href='/finanzas'>
                            <img src={require('../assets/icons/finanzas.png')} alt='Finanzas' className='section-icon' />
                        </a>
                        <p>FINANZAS</p>
                    </div>
                    <div className='section'>
                        <a href='/contratacion'>
                            <img src={require('../assets/icons/contratacion.png')} alt='Contratación' className='section-icon' />
                        </a>
                        <p>CONTRATACIÓN</p>
                    </div>
                    <div className='section'>
                        <a href='/implementaciones'>
                            <img src={require('../assets/icons/ahorro-energia.png')} alt='Ahorro de Energía' className='section-icon' />
                        </a>
                        <p>IMPLEMENTACIONES</p>
                    </div>
                    <div className='section'>
                        <a href='/informacion'>
                            <img src={require('../assets/icons/desarrollo-social.png')} alt='Desarrollo Social' className='section-icon' />
                        </a>
                        <p>INFORMACIÓN</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;