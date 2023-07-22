import React from "react";
import Carousel from "react-multi-carousel";
import "../Carousel/Carousel.css";
import "react-multi-carousel/lib/styles.css";



const ResponsiveCarousel = () => {
    const responsive = {
        LargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
    };

    return (
        <div className="block__content">
            <h1 className="heading__primary">Products</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                >
                <div className="carousel__item">Item 1</div>
                <div className="carousel__item">Item 2</div>
                <div className="carousel__item">Item 3</div>
                <div className="carousel__item">Item 4</div>
            </Carousel>
        </div>
    )

};

export default ResponsiveCarousel;