import React from 'react';
import Achievements from '../Components/Achievements/Achievements';
import Contact from '../Components/Contact/Contact';
import FooterPart from '../Components/FooterPart/FooterPart';
import GetDesign from '../Components/GetDesign/GetDesign';
import Header from '../Components/Header/Header';
import Pricing from '../Components/Pricing/Pricing';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Contact/>
            <Achievements/>
            <Pricing/>
            <GetDesign/>
            <FooterPart/>
        </div>
    );
};

export default Home;