import React, { Component } from 'react';
import MainImage from './mainImage';
import BodyText from './components/bodyText';

import "./styles/imageAndText.css"


function ImageAndText () {
    return ( 
        <>
        <div id="spanBlock">
            <BodyText id="bodyText"></BodyText>
            <MainImage></MainImage>
        </div>
        </>
     );
}

export default ImageAndText;