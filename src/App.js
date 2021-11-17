import React, { Component } from 'react';
import Sidenav from './Sidenav.js';
import Header from './Header.js';
import Slider from './slider.js';
import MainBody from './MainBody';
import Footer from './Footer';
class App extends Component {
    render() {
        return (

            <div>
                <Header />
                <Sidenav/>
                <Slider />
                <MainBody />
                <Footer />
            </div>

        );
    }
}

export default App;