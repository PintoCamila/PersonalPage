import React, { Component } from 'react';
import MainImage from './mainImage';
import BodyText from './bodyText';

import "D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/styles/imageAndText.css"


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