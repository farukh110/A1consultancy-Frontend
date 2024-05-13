import ContactForm from "../home/contact-form/ContactForm";
import banner from '../../assets/images/inner-services/contact-center.jpg';
import Page from "../generic-page/Page";
import { Helmet } from "react-helmet-async";

const Contact = () => {

    return (
        <div>
            <Helmet>

                <title> Contact Us </title>
                <meta name="description" content="Contact A1Consultancy to fulfill all of your digital requirements from the start to finish. We are always here to help beyond services. Contact us here." />
                <meta name="keywords" content="Contact us, digital requirements, BPO services, digital marketing, A1Consultancy, client satisfaction, strategic planning, innovative approaches" />
                <meta name="author" content="A1Consultancy" />
                <meta name="robots" content="all" />
                <meta name="revisit-after" content="1 Days" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:site_name" content="A1Consultancy" />
                <meta property="og:image" content="https://a1-consultancy.com/assets/a1-logo1-IFYzz0lG.png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="50" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Us - " />
                <meta property="og:title" content="A1Consultancy Company in USA | BPO Services" />
                <meta property="og:description" content="Contact A1Consultancy to fulfill all of your digital requirements from the start to finish. We are always here to help beyond services. Contact us here." />
                <meta property="og:url" content="https://a1-consultancy.com/" />

            </Helmet>

            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Contact Us`}
                bannerContent={null}
            />
            <ContactForm />
        </div>
    )
}

export default Contact;
