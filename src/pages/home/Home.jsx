import ContactForm from './contact-form/ContactForm';

// import banner from '../../assets/images/banner.jpg';
import WhatWeDo from './what-we-do/WhatWeDo';
import BpoServices from './bpo-services/BpoServices';
import CustomSlider from '../../components/sliders/custom-slider/CustomSlider';


const Home = () => {

    return (
        <>
            <CustomSlider />
            {/* <Services /> */}
            <WhatWeDo />
            <BpoServices />
            {/* <Events /> */}
            <ContactForm />
        </>
    )
}

export default Home;