import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </main>
    );
};

export default Home;