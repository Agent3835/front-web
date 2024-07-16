import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/PromotionsCarousel.css";

const PromotionsCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img
            src={require("../assets/home/carrousel/newProduct.png")}
            alt="Promotion 1"
          />
          <p className="legend">Promotion 1</p>
        </div>
        <div>
          <img
            src={require("../assets/home/carrousel/hotSeason.png")}
            alt="Promotion 2"
          />
          <p className="legend">Promotion 2</p>
        </div>
        <div>
          <img
            src={require("../assets/home/carrousel/takeCare.png")}
            alt="Promotion 3"
          />
          <p className="legend">Promotion 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default PromotionsCarousel;
