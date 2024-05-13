import { Helmet } from 'react-helmet-async';
import banner from '../../assets/images/inner-services/contact-center.jpg';
import Page from "../generic-page/Page";
import CareersForm from '../home/careers-form/CareersForm';

const Careers = () => {

    return (
        <div>
            <Helmet>

                <title> Careers </title>
                <meta name="description" content="Explore open job opportunities at A1Consultancy." />
                <meta name="keywords" content="Careers, job opportunities, A1Consultancy, BPO services, digital marketing, client satisfaction, strategic planning, innovative approaches" />
                <meta name="author" content="A1Consultancy" />
                <meta name="robots" content="all" />
                <meta name="revisit-after" content="1 Days" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:site_name" content="A1Consultancy" />
                <meta property="og:image" content="https://a1-consultancy.com/assets/a1-logo1-IFYzz0lG.png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="50" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Careers - " />
                <meta property="og:title" content="A1Consultancy Company in USA | BPO Services" />
                <meta property="og:description" content="Explore open job opportunities at A1Consultancy." />
                <meta property="og:url" content="https://a1-consultancy.com/" />

            </Helmet>

            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Careers`}
                bannerContent={null}
            />
            <CareersForm />
        </div>
    )
}

export default Careers;
