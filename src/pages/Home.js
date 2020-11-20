import React from 'react';
import Contact from '../Components/Contact/Contact';
import FooterPart from '../Components/FooterPart/FooterPart';
import GetDesign from '../Components/GetDesign/GetDesign';
import Header from '../Components/Header/Header';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Contact/>
            <GetDesign/>
            <FooterPart/>
        </div>
    );
};

export default Home;