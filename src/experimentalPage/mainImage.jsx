import React, { Component } from 'react';
import "./styles/mainImage.css";

const mainImage = require("./resources/self_portrait.png");

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