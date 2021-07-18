import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import ListFeatures from './ListFeatures';
import Footer from './Footer';

class HomeExsercise3 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <ListFeatures />
                <Footer />
            </div>
        )
    }
}

export default HomeExsercise3;