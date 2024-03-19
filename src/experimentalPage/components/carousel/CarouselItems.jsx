import React, { Component } from 'react';

import "../../styles/CarouselItems.css";

class CarouselItem extends Component {
    render() {
        const { item } = this.props;

        return ( 
            <div id="carouselItems">
                <p id="carouselText">{item.text}</p>
                {item.secondText && <p id="carouselSecondText">{item.secondText}</p>}
                {item.image && <img id="carouselImage" src={item.image} alt="Carousel Image" />}
            </div>
        );
    }
}
 
export default CarouselItem;
