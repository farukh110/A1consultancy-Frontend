import React from 'react';
import Services from './services/Services';
import ContactForm from './contact-form/CareersForm';
import Banner from './main-banner/Banner';

import banner from '../../assets/images/banner.jpg';
import MainSlider from '../../components/sliders/home-slider/MainSlider';
import WhatWeDo from './what-we-do/WhatWeDo';
import BpoServices from './bpo-services/BpoServices';
import Events from './events/Events';


const Home = () => {

    const dynamicClass = {
        fontSize: '30px', // Example font size
        color: '#fff', // Example color
    };

    return (
        <>
            {/* <Banner
                bannerImage={banner}
                dynamicClass={dynamicClass}
                mediumText={`We prioritize your goals as our own to guarantee ongoing success.`}
                mediumBelowText={`Let us bring our enthusiastic expertise to help your business thrive.`}
                bannerContent={`Are you in need of ready-to-go solutions? Don't fret over this! Our team is here to assist you in ensuring efficient delivery while saving you time and costs.`}
            /> */}
            <MainSlider />
            {/* <Services /> */}
            <WhatWeDo />
            <BpoServices />
            {/* <Events /> */}
            <ContactForm />
        </>
    )
}

export default Home;