import ContactForm from './contact-form/ContactForm';

// import banner from '../../assets/images/banner.jpg';
import WhatWeDo from './what-we-do/WhatWeDo';
import BpoServices from './bpo-services/BpoServices';
import CustomSlider from '../../components/sliders/custom-slider/CustomSlider';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    return (
        <>
            <Helmet>

                <title> A1Consultancy Company in USA | BPO Services </title>
                <meta name="description" content="A trusted outsourced call center equipped with a highly skilled team, ready to meet all of your call center requirements. Manage cold calling, virtual receptionists, inbound, and outbound calling." />
                <meta name="keywords" content="For exceptional BPO and digital marketing services, A1Consultancy delivers tailored solutions geared towards business success. Our dedicated team strives to enhance client satisfaction and achieve tangible results through strategic planning and innovative approaches." />
                <meta name="author" content="A1Consultancy" />
                <meta name="robots" content="all" />
                <meta name="revisit-after" content="1 Days" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:site_name" content="A1Consultancy" />
                <meta property="og:image" content="https://a1-consultancy.com/assets/a1-logo1-IFYzz0lG.png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="50" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="A1Consultancy Company in USA | BPO Services" />
                <meta property="og:description" content="A trusted outsourced call center equipped with a highly skilled team, ready to meet all of your call center requirements. Manage cold calling, virtual receptionists, inbound, and outbound calling." />
                <meta property="og:url" content="https://a1-consultancy.com/" />

            </Helmet>
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