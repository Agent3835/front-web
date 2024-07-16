import React  from 'react';
import PromotionsCarousel from '../components/PromotionsCarousel';

const Home = () => {
    return(
        <div className='content'>
            <PromotionsCarousel />
            <h1>Welcome to Arctic Breeze</h1>
            <p>Buy products or request installations with ease!</p>
        </div>
    );
};

export default Home;