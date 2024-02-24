import React from 'react';
import Services from './services/Services';
import ContactForm from './contact-form/ContactForm';
import Banner from './main-banner/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <ContactForm />
        </>
    )
}

export default Home;