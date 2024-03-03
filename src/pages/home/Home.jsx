import React from 'react';
import Services from './services/Services';
import ContactForm from './contact-form/ContactForm';
import Banner from './main-banner/Banner';

import banner from '../../assets/images/banner.jpg';


const Home = () => {
    return (
        <>
            <Banner
                bannerImage={banner}
                mediumText={`we prioritize your goals as our own to guarantee ongoing success.`}
                mediumBelowText={`Let us bring our enthusiastic expertise to help your business thrive.`}
                bannerContent={`Are you in need of ready-to-go solutions? Don't fret over this! Our team is here to assist you in ensuring efficient delivery while saving you time and costs.`}
            />
            <Services />
            <ContactForm />
        </>
    )
}

export default Home;