import React, { Component } from 'react';
import Background from './background';
import Card from './card';
import Title from './title';
import MainImage from './mainImage';
import BodyText from './bodyText';
import ImageAndText from './imageAndText';

import "./styles/mainPage.css";


class MainPage extends Component {
    state = { title: "Placeholder Title",
              name: "Break title into header and 'Welcome!' below text and image",
            welcome: "Welcome!" } 
    render() { 
        return (
            <>
            <Background id="background"></Background>
            <Title title={this.state.title} name={this.state.name} welcome={this.state.welcome} id="titleBlock"></Title>
            <div id="placeholderCard">
                    <ImageAndText id="imageAndText"/>
                    </div>
            </>
        );
    }
}
 
export default MainPage;