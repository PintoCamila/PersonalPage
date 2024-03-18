import React, { Component } from 'react';

import "D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/styles/title.css";


class Title extends Component {
    state = { 
        welcomeText: [
                         {title:"Welcome to my page!",
                         name: "Placehoder",
                         id: 1}
                     ]
            };


    render() { 
        console.log(this.props);
        console.log(this.state)

       /* return (
                <>
                   <h1>{this.state.welcomeText[0].title}</h1>
                   <h3>My name is {this.state.welcomeText[0].name}</h3>
                </>
        );*/

        return(
            <>
            <div id="welcomeTextContainer">
            <h1 id="title">{this.props.title}</h1>
            <h3 id="name">{this.props.name}</h3>
            <h3 id="welcomeText">{this.props.welcome}</h3>
            </div>
            </>
        
        )
    }
}
 
export default Title;