import ContactForm from './contact-form/ContactForm';
import WhatWeDo from './what-we-do/WhatWeDo';
import BpoServices from './bpo-services/BpoServices';
import CustomSlider from '../../components/sliders/custom-slider/CustomSlider';
import { Helmet } from 'react-helmet-async';
import LatestBlogs from './blogs/LatestBlogs';


const Home = () => {

    return (
        <>
            <Helmet>

                <title> A1 Consultancy | Telemarketing | Call Center</title>
                <meta name="description" content="Telemarketing lead generation company that specializes in helping businesses increase revenue through digital marketing." />
                <meta name="keywords" content="Lead generation, B2B outbound marketing using cold calling, cold email marketing, social media marketing, and blog postings." />
                <meta name="author" content="A1 Consultancy" />
                <meta name="robots" content="all" />
                <meta name="revisit-after" content="1 Days" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:site_name" content="A1 Consultancy" />
                <meta property="og:image" content="https://a1-consultancy.com/assets/a1-logo1-IFYzz0lG.png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="50" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="A1 Consultancy | Telemarketing | Call Center" />
                <meta property="og:description" content="Telemarketing lead generation company that specializes in helping businesses increase revenue through digital marketing." />
                <meta property="og:url" content="https://a1-consultancy.com/" />
                <link rel="canonical" href="https://a1-consultancy.com" />

            </Helmet>
            <CustomSlider />
            {/* <Services /> */}
            <WhatWeDo />
            <BpoServices />
            {/* <Events /> */}
            <ContactForm />
            <LatestBlogs />
        </>
    )
}

export default Home;