import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Background from './components/Background.jsx';

import Navbar from './components/Navbar.jsx';

import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services.jsx';
import Contact from './components/pages/Contact.jsx';

import "./styles/App.css";


class App extends Component { 
    render() { 
        return (
            <>
            <Background id="background"></Background>
            <Navbar id="navbar"></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </>
        );
    }
}
 
export default App;