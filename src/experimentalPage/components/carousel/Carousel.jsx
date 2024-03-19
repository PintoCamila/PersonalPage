import React, { Component, useState } from 'react';

import CarouselItem from './CarouselItems.jsx';

import "../../styles/Carousel.css"

class Carousel extends Component {
   
    state = { carouselItems:[
                    {id: 1,
                    text: "first text here",
                    },
                    {id: 2,
                    text: "first text here",
                    secondText: "Second text here"
                    },
                    {id: 3,
                    text: "first text here",
                    secondText: "Second text here",
                    image: require("../../resources/Acacia_Flats.png")
                    }
                ],
                activeIndex: 0
            }

            setActiveIndex = (index) => {
                this.setState({activeIndex: index});
            }

    render() {
        const {carouselItems, activeIndex} = this.state;

        return (
            <div id="outer">
            <div id="carousel">
                <div id="wrapper">
                {carouselItems.map((item, index) => (
                    <div key={item.id} className="carousel-item" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        <CarouselItem item={item} />
                    </div>
                ))}
            </div>
            </div>
            </div>
        );
    }
}

export default Carousel;