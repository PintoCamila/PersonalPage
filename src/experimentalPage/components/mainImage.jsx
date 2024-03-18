import React, { Component } from 'react';
import "D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/styles/mainImage.css";

const mainImage = require("D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/resources/self_portrait.png");

function MainImage() {
    return ( 
        <>
        <div id="mainImageContainer">
        <img src={mainImage} id="selfPortrait"></img>
        </div>
        </>
     );
}

export default MainImage;