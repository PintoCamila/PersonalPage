import React, { Component } from 'react';

import Carousel from '../carousel/Carousel.jsx';

import Title from 'D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/components/Title.jsx';
import ImageAndText from 'D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/components/ImageAndText.jsx';

import "D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/styles/Home.css"

class Home extends Component {
    state = { title: "Placeholder Title",
              name: "Break title into header and 'Welcome!' below text and image",
            welcome: "Welcome!" } 
    render() { 
        return (
            <>
            <div id="page">
            <Title title={this.state.title} name={this.state.name} welcome={this.state.welcome} id="titleBlock"></Title>
            </div>
            <Carousel></Carousel>
            <div id="placeholderCard">
                <ImageAndText id="imageAndText"/>
            </div>
            </>
        );
    }
}
 
export default Home;


