import Page from '../generic-page/Page';
import about from '../../assets/images/about/about.jpg';
import BpoServices from '../home/bpo-services/BpoServices';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <>

            <Helmet>

                <title> About Us </title>
                <meta name="description" content="We are fully committed to ensuring your success. Our professionals excel in contact center services, lead generation, and digital marketing. " />
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
                <meta property="og:title" content="About Us - " />
                <meta property="og:title" content="A1Consultancy Company in USA | BPO Services" />
                <meta property="og:description" content="We are fully committed to ensuring your success. Our professionals excel in contact center services, lead generation, and digital marketing. " />
                <meta property="og:url" content="https://a1-consultancy.com/" />
                <link rel="canonical" href="/about-us" />

            </Helmet>

            <Page
                bannerImage={about}
                mediumText={null}
                mediumBelowText={`About Us`}
                bannerContent={null}
            />

            <div className="container py-md-5 py-4">

                <div className="row">

                    <div className="col-md-12">

                        <div className="content-area">

                            <p>
                                We are fully committed to ensuring your success.  Our professionals excel in contact center services, lead generation, and digital marketing. We strive for excellence, constantly pushing the boundaries of innovation and tailoring our solutions to meet our client's unique needs. We are here to help you achieve your goals and stay ahead in this constantly changing world. Our experienced consultants offer valuable industry insights and strategic guidance to propel your business to new heights.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <BpoServices />
        </>
    )
}

export default AboutUs;
